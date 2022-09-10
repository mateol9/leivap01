import './Checkout.css';
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom'
import { db } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import CheckForm from '../CheckForm/CheckForm';

const Checkout = () => {

  const { cart, getQuantity, getTotal, clearCart } = useCartContext();
  const [isLoading, setIsLoading] = useState(false)
  const [orderCreated, setOrderCreated] = useState(false)
  const [orderInfo, setOrderInfo] = useState({});
  const [outStock, setOutStock] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate()

  const totalQuantity = getQuantity()
  const total = getTotal()

  const createOrder = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const objOrder = {
        costumer: {
          name,
          email,
          phone,
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date()
      }

      const ids = cart.map(prod => prod.id)

      const productsRef = collection(db, 'products')

      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

      const { docs } = productsAddedFromFirestore

      const outOfStock = []

      const batch = writeBatch(db)

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)

        clearCart()
        setOrderCreated(true)
        setOrderInfo(orderAdded)

      } else {
        setOutStock(true);
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <h1>Su orden de compra esta siendo generada...</h1>
  }

  if (outStock) {
    return <div className='outStock'>
      <h1>Lo sentimos, uno o mas productos seleccionados estan fuera de stock.</h1>
      <button onClick={() => { navigate('/') }}>Volver al Inicio</button>
    </div>
  }

  if (orderCreated) {
    return <div className='orderCreatedCard'>
      <h1>Orden Generada</h1>
      <p>El ID de su orden es: {orderInfo.id}</p>
      <p>Nombre: {name}</p>
      <p>Email: {email}</p>
      <p>Telefono: {phone}</p>
      <button onClick={() => { navigate('/') }}>Volver al Inicio</button>
    </div>
  }

  return (
    <CheckForm
      name={name}
      setName={setName}
      phone={phone}
      setPhone={setPhone}
      email={email}
      setEmail={setEmail}
      createOrder={createOrder} />
  )

}

export default Checkout;
