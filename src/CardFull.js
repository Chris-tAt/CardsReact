
import React, { useState } from 'react';
import './CardFull.css';
import pizza from './pizza.jpg';
import compartir from './compartir.png';
import megusta from './megusta.png';

 const CardFull = () => {
   const handleLike = () => {
 }; 
 const handleShare = () => {

 };
 const [isAbrir, setIsAbrir] = useState(false);
  return (
    <div className='CardFull'>
        <h2 className='CardFull-title'>Pizza Vegetariana</h2>
        <img src={pizza} alt='este es el tercer' className='CardFull-img'/>
        <div className='CardFull-content'>
            <p className='CardFull-description'>La pizza vegetariana tiene una importancia significativa tanto desde
             el punto de vista culinario como desde la perspectiva de la sostenibilidad y la salud.</p>
           <div className='CardFull-Action'>
           <button className="CardFull-button" onClick={handleLike}>
           <img src={megusta} alt="Me gusta" className='CardFull-megusta'/>
          </button>
          <button className="CardFull-button" onClick={handleShare}>
          <img src={compartir} alt="compartir" className='CardFull-compartir'/>
          </button>
          <button className='CardFull-button' onClick={() => setIsAbrir(!isAbrir)}>
            {isAbrir ? 'Cerrar' : 'Abrir'} Receta
          </button>
           </div>
           {isAbrir && (
            <div className='CardFull-receta'>
               <h4>Ingredientes:</h4>

<p>Masa de pizza (puedes comprarla prehecha o hacerla en casa)<br />
Salsa de tomate<br />
Queso mozzarella rallado (asegúrate de que sea vegetariano si lo prefieres)<br />
Aceite de oliva<br />
Sal y pimienta al gusto<br />
Vegetales variados (algunas sugerencias incluyen champiñones, pimientos, cebollas, espinacas, tomates cherry, calabacín, berenjenas, etc.)<br />
Opcional: hierbas frescas como albahaca o orégano para decorar<br /></p>

<h4>Instrucciones:</h4>

<p>- Precalienta el horno a la temperatura indicada en las instrucciones de la masa de pizza o a 200°C (400°F).<br />

- Extiende la masa de pizza en una bandeja para horno, previamente engrasada o cubierta con papel de hornear.<br />

- Unta la salsa de tomate sobre la masa, asegurándote de cubrirla de manera uniforme. Puedes agregar más o menos según tu preferencia.<br />

- Espolvorea una capa generosa de queso mozzarella rallado sobre la salsa de tomate.<br />

- Lava y corta los vegetales en rodajas finas o en trozos pequeños, según tu preferencia.<br />

- Distribuye los vegetales sobre la pizza de manera uniforme. Puedes ser creativo con la combinación de vegetales que elijas.<br />

- Rocía un poco de aceite de oliva sobre los vegetales y sazona con sal y pimienta al gusto.<br />

- Coloca la pizza en el horno precalentado y hornea durante aproximadamente 15-20 minutos, o hasta que la masa esté dorada y crujiente.<br />

- Una vez lista, retira la pizza del horno y deja que se enfríe un poco antes de cortarla.<br />

- Si lo deseas, decora con algunas hierbas frescas como albahaca o espolvorea un poco de orégano sobre la pizza antes de servir.<br /></p> 
            </div>
           )}
        </div>
    </div>
    
  );
};
export default CardFull;
