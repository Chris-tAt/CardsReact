import React from 'react';
import iguana from './iguana.jpg';
import './CardIguana.css';

 const CardIguana = () => {
  return (
    <div className='Card2'>
        <img src={iguana} alt='imagen segunda' className='Card2-img'/>
        <div className='Card2-content'>
            <h2 className='Card2-title'>Iguanita</h2>
            <p className='Card2-description'>Las iguanas son reptiles pertenecientes a la familia Iguanidae.
             Son conocidas por su apariencia distintiva y su comportamiento único. 
             Hay alrededor de 40 especies diferentes de iguanas, que se encuentran principalmente en las regiones
              cálidas de América Central, América del Sur y el Caribe.</p>
        </div>


    </div>
  )
}
export default CardIguana;
