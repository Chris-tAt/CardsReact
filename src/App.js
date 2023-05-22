
import './App.css';
import CardFull from './CardFull';
import CardIguana from './CardIguana';
import CardMio from './CardMio.js';
function App() {
  return (
    <div>
        <h1>Aprendiendo a hacer card</h1>
     
     <div className='Aprendiendo'>
      
         <CardMio className='cardmio'/>
         <CardIguana className='cardiguana'/>
         <CardFull className='cardfull'/>
       </div>


    </div>
    
  );
  
}

export default App;
