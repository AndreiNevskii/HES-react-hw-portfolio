import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import ContactForm from '../../components/ContactForm/ContactForm';
import {Fragment, useState} from "react";
import photo from '../../assets/Nevskii.jpg';

import './Homepage.css';

export default function Homepage() {
  const [contactFormState, displayContactForm] = useState(false);
  return (
     <>
     <main className='main'>
     <div className = "main-container-info"> 
        <span className="main-rectangle"></span>
          <div className="h1-container">
          <h1 className="main-h1">Меня зовут Андрей</h1>
          <h1 className="main-h1">Я веб разработчик</h1>
          </div>  
          <p className= "main-p">Я создаю высокопроизводительные красивые веб-сайты, которые ориентированы на конверсию, 
            соответствуют бренду и удобны для людей</p>
        <Button className = {"button-form"} onClick = {() => displayContactForm(true)} label = "Связаться со мной"/>
     </div> 
     <img className="main-photo" src={photo} /> 
     </main> 
     {contactFormState && <ContactForm onClick={() => displayContactForm(false)}/>} 
   </>
  )
}
