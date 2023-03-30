import { useState } from 'react';
import './Entete.css';

export default function Entete(){
    let [courriel, setCourriel] = useState("");
    let [connecter, setConnecter] = useState(false);

    function verifierCourriel(){
        console.log(courriel);
        if(courriel && !connecter){
            setConnecter(true);
        }
        else if(courriel && connecter){
            setConnecter(false);
        }

        // Mais comment lire le champ input?

    }

   function etatConnection()
   {
        let html = <p>Pas connecté</p>;
        if(connecter){
            html = <p>Est connecté</p>;
        }
        return html
   }
    function btnConnection(){
        let chaine = "Se connecter";
        if(connecter){
            html = "Se déconnecter";
        }
        return chaine;
    }
    return (
        <header id='entete' className='entete'>    
            <h1>Titre de page</h1>
            <span className='spacer'></span>
            <nav>
                Courriel<input disabled={connecter} value={courriel} onChange={(e)=>{setCourriel(e.target.value)}} type="text"></input>
                <button onClick={(e)=>{ verifierCourriel()}}>{(!connecter ? "Se connecter" : "Se déconnecter" )}</button>
                {etatConnection()}
                <a href="">Accueil</a>
                <a href="">Liste</a>
            </nav>
        </header>
    );

}