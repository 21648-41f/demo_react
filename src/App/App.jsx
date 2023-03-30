import './App.css'
import Entete from '../Entete/Entete';
import Liste from '../Liste/Liste';
import { useState } from 'react';

function App() {
  let [sTitre, setTitre] = useState("Le titre de la page");

  //let sTitre = "Le titre de la page";
  const uneProp = {
    prop1 : "allo",
    prop2 : "le",
    prop3 : "monde"
  };

  setTimeout(()=>{
    console.log(sTitre);
    setTitre("Nouveau titre")
    console.log(sTitre);
  } , 5000);

  return (
    <>
      <Entete />
      <Liste {...uneProp} titre={sTitre} nbMax="5" tri="nom" ordre="ASC" test={uneProp} />
      <div className="App">
        
        {sTitre}
      </div>
    </>
  )
}

export default App
