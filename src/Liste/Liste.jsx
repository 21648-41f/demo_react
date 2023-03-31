import { useState } from "react";
import "./Liste.css";
export default function Liste(props){
    
    console.log("liste")
    //prop.titre = "test";
    let aProduits=[];
    for(let i = 0; i< 15; i++){
        aProduits.push({
            nom : " Item " + i,
            fabricant : "Fab " +i,
            prix : Math.floor(Math.random()*50)
        });
    }
    let [produits, setProduits] = useState(aProduits);
    

    const htmlProduit = produits.map((unProduit, index)=>{
        let prix = <p>Prix : Non disponible</p>;
        if(props.connecter){
            prix = <p>Prix : {unProduit.prix}</p>
        }
        return (
                <article key={index}>
                    <p>Nom : {unProduit.nom}</p>
                    <p>Fabricant : {unProduit.fabricant}</p>
                    {prix}
                </article>
            );
    })

    function ajouterProduit(){

        let item = {
            nom : " Item 100",
            fabricant : "Fab 100",
            prix : Math.floor(Math.random()*50)
        };
        setProduits(produits.concat(item));
        //console.log(aProduits);
    }

    return (
        <>
            <h1 className="">{props.titre}</h1>
            <button onClick={()=>{ ajouterProduit()}}>AjouterProduit</button>
            <section className="catalogue">
            {htmlProduit}
            </section>
        </>
    )

}