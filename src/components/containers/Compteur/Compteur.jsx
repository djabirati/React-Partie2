import {useState} from "react";
import {Bouton} from "../../ui/Button/Button.jsx";

export function Compteur() {
    const [compteur, changeCompteur] = useState(0);


    function increment() {
        changeCompteur(compteur + 1);
    }
    function decrement() {
        changeCompteur(compteur - 1);
    }
    return (
        <>
            <h2 className="text-xl text-center">
                {compteur}
            </h2>
            <Bouton gereClique={increment}>+1</Bouton>
            <Bouton gereClique={decrement}>-1</Bouton>
        </>

    )
}