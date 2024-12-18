import {useState} from "react";
import {Bouton} from "../../ui/Button/Button.jsx";

export function Menu() {

    const [textButton, changeText] = useState('Show')
    function changeTextButton() {
        changeText(textButton === 'Show' ? 'Hide' : 'Show');
    }

    return (
        <>
            <Bouton gereClique={changeTextButton}>{textButton}</Bouton>
            <div className={textButton === 'Show' ? 'hidden' : 'visible'}>
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