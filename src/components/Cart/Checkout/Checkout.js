import React, {useState} from 'react'
import styles from './Checkout.module.scss';
import {useSelector} from 'react-redux'

const Checkout = () => {

    const [email, setEmail] = useState('');
    const cartTotal = useSelector((state) => state.cartReducer.cartTotal);
    
    const handleChange = (evt) => {
        evt.preventDefault();
        setEmail(evt.target.value);
    }

  
    return (
        <>
        <div>
        <form>
            <input type="text" id="name" placeholder="Full name"></input>
            <input type="text" id="email" placeholder="Email" value={email} onChange={handleChange}></input>
            <input type="text" id="address" placeholder="Delivery Address"></input>
            <input type="text" id="number" placeholder="Contact phone number"></input>
            <label>Local Government Area</label>
            <select>
            <option value="Alimosho">Alimosho</option>
      <option value="Ajeromi-Ifelodun">Ajeromi-Ifelodun</option>
      <option value="Kosofe">Kosofe</option>
      <option value="Mushin">Mushin</option>
      <option value="Oshodi-Isolo">Oshodi-Isolo</option>
      <option value="Ojo">Ojo</option>
      <option value="Ikorodu">Ikorodu</option>
      <option value="Surulere">Surulere</option>
      <option value="Agege">Agege</option>
      <option value="Ifako-Ijaiye">Ifako-Ijaiye</option>
      <option value="Somolu">Somolu</option>
      <option value="Amuwo-Odofin">Amuwo-Odofin</option>
      <option value="Lagos Mainland">Lagos Mainland</option>
      <option value="Ikeja">Ikeja</option>
      <option value="Eti-Osa">Eti-Osa</option>
      <option value="Badagry">Badagry</option>
      <option value="Apapa">Apapa</option>
      <option value="Lagos Island">Lagos Island</option>
      <option value="Epe">Epe</option>
      <option value="Ibeju-Lekki">Ibeju-Lekki</option>
            </select>
        <div className={styles.buttons}>
            <button className={styles.back}>GO BACK</button>
            <button className={styles.pay}>PAY NOW</button>
        </div>
        </form>
        </div>

    </>
    )
};

export default Checkout;