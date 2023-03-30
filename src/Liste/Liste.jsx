import { useState } from "react";
import "./Liste.css";
export default function Liste(prop){
    console.log(prop)
    //prop.titre = "test";
    let aProduits=[];
    for(let i = 0; i< 15; i++){
        aProduits.push({
            nom : " Item " + i,
            fabricant : "Fab " +i,
            prix : Math.floor(Math.random()*50)
        });
    }
    //let [produits, setProduits] = useState(aProduits);
    
    const htmlProduit = aProduits.map((unProduit, index)=>{
        return (
                <article key={index}>
                    <p>Nom : {unProduit.nom}</p>
                    <p>Fabricant : {unProduit.fabricant}</p>
                    <p>Prix : {unProduit.prix}</p>
                </article>
            );
    })
    return (
        <>
            <h1 className="">{prop.titre}</h1>
            <section className="catalogue">
            {htmlProduit}
            </section>
        </>
    )

}