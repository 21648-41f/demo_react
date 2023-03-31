import { useState } from "react";
import "./Liste.css";
export default function Liste(prop){
    
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
        return (
                <article key={index}>
                    <p>Nom : {unProduit.nom}</p>
                    <p>Fabricant : {unProduit.fabricant}</p>
                    <p>Prix : {unProduit.prix}</p>
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
            <h1 className="">{prop.titre}</h1>
            <button onClick={()=>{ ajouterProduit()}}>AjouterProduit</button>
            <section className="catalogue">
            {htmlProduit}
            </section>
        </>
    )

}