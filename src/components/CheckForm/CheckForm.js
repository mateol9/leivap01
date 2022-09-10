import React from 'react'
import './CheckForm.css'

const CheckForm = ({ name, setName, email, setEmail, phone, setPhone, createOrder }) => {

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

export default CheckForm