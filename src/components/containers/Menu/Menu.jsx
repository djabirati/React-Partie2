import {useState} from "react";
import {Bouton} from "../../ui/Button/Button.jsx";

export function Menu() {

    const [isTextVisible, changeText] = useState(false)
    function changeTextButton() {
        changeText(!isTextVisible);
    }

    return (
        <>
            <Bouton gereClique={changeTextButton}>
                {isTextVisible ? 'Hide' : 'Show'}
            </Bouton>
            <div className={isTextVisible ? 'block mt-4 p-4 bg-gray-100 rounded shadow' : 'hidden'}>
                <h2>Menu Secret</h2>
                <ul>
                    <li>Nourrir le chien</li>
                    <li>Faire mes devoirs</li>
                    <li> Essayer des trucs en React</li>
                </ul>
            </div>
        </>
    )
}