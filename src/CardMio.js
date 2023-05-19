import React from 'react'
import './CardMio.css';
import PerroMio from './PerroMio.jpg';
 const CardMio = () => {
  return (
    <div className='Card'>
        <img src={PerroMio} alt='PerroMio' className='Card-img'/>
        <div className='Card-contend'>
            <h3 className='Card-title'> El Perro Labrador Negro</h3>
            <p className='Card-description'> 
            <span className="drop-cap">E</span>l perro labrador negro es una raza muy valorada y apreciada. 
            Estos caninos son conocidos por su <u>inteligencia</u>, <u>lealtad</u> y <u>amabilidad</u>
            . Además, destacan por su habilidad en diversas actividades como el trabajo de <strong>búsqueda y rescate</strong>,
             el entrenamiento de asistencia, la detección de drogas y la <strong>terapia emocional</strong>.</p>
             <div className='Card-buttons'>
                <button className='Card-button'>COMPARTIR</button>
                <button className='Card-button'>APRENDER MÁS</button>

             </div>

        </div>
    </div> 
  );
}
export default CardMio;
