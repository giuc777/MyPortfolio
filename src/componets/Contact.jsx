import React, { useState } from 'react';
import '../estilos/Contact.css';
import Tanks from './Tanks';


const Contact = () => {
  const [send, setSend] = useState(false);
  const [formdata, setFormdata] = useState({
    name: '',
    Phone: '',
    Mail: '',
    Message: ''
  });

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    setSend(true);

    // Realiza acciones adicionales, como enviar los datos al servidor
    fetch('http://127.0.0.1:8080/SendForm.php', {
      method: 'POST',
      body: JSON.stringify(formdata),
    })
      .then((response) => response.text()) // Utiliza response.text() en lugar de response.json()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    console.log('Formulario enviado', formdata.name);
  };

  return (
    <div className='contact'>
      {send ? <Tanks name={formdata.name} /> : ''}
      <form className='flex-d row' onSubmit={handleSubmit}>
        <label className='TextContact Text_color_Flamingo text_Montserrat margin'>Name: </label>
        <input className='inputContat margin' value={formdata.name} type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <label className='TextContact Text_color_Flamingo text_Montserrat margin'>Phone: </label>
        <input className='inputContat margin' value={formdata.Phone} type="text" name="Phone" placeholder="Ex. +502 23909322" onChange={handleChange} required />
        <label className='TextContact Text_color_Flamingo text_Montserrat margin'>Email: </label>
        <input className='inputContat margin' value={formdata.Mail} type="text" name="Mail" placeholder="Example@example.com" onChange={handleChange} required />
        <label className='TextContact Text_color_Flamingo text_Montserrat margin'>Message: </label>
        <textarea cols="30" rows="10" value={formdata.Message} name="Message" placeholder='Yor message' onChange={handleChange}></textarea>        
        {/* Resto de los campos del formulario */}
        
        <div className='d-flex justify-content-center'>
          <input type="Submit" value='Send' className='send-Contact title' disabled={send} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
