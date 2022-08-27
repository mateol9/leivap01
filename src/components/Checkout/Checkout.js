import './Checkout.css';
import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import { useNavigate } from 'react-router-dom'
import { gec } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"

const Checkout = () => {

  const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)
  const [orderCreated, setOrderCreated] = useState(false)
  const [orderInfo, setOrderInfo] = useState({});
  const [outStock, setOutStock] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [disabled, setDisabled] = useState(true);
  console.log(orderInfo);

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

      const productsRef = collection(gec, 'products')

      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

      const { docs } = productsAddedFromFirestore

      const outOfStock = []

      const batch = writeBatch(gec)

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockGec = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        if (stockGec >= prodQuantity) {
          batch.update(doc.ref, { stock: stockGec - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(gec, 'orders')
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

  const validate = () => {
    if (/\d/.test(name) && name !== '') {
      return 'Tu nombre no puede contener numeros'
    }

    if (!(email.includes('@') && email.includes('.')) && email !== '') {
      return 'Formato de email incorrecto'
    }
  }

  const isBtnDisabled = () => {
    if (!(email.includes('@') && email.includes('.')) || /\d/.test(name) || phone === '') {
      return true;
    } else {
      return false;
    }
  }

  isBtnDisabled();

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
    <div className='checkoutContainer'>
      <h1>Checkout</h1>
      <span style={{ color: 'red' }}>{validate()}</span>
      <form>
        <input placeholder='Nombre' onChange={(e) => setName(e.target.value)} value={name}></input>
        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <input placeholder='Telefono' onChange={(e) => { if (!isNaN(e.target.value)) setPhone(e.target.value) }} value={phone}></input>
        <button className={isBtnDisabled() ? 'checkoutBtnDisabled' : 'checkoutBtnEnabled'} onClick={createOrder} disabled={isBtnDisabled()}>Generar Orden</button>
      </form>
    </div>
  )

}

export default Checkout;
