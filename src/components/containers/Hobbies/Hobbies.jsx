import PropTypes from "prop-types";
import { useState } from "react";
import { Bouton } from "../../ui/Button/Button.jsx";

export function Hobbies({ hobbies }) {
    const [hobbiesInput, setHobbiesInput] = useState('');
    const [hobbiesList, setHobbiesList] = useState(hobbies);
    const [hobbiesError, setHobbiesError] = useState('');

    function handleHobbies(e) {
        const value = e.target.value;
        setHobbiesInput(value);
        setHobbiesError('');
    }

    function submit() {
        if (hobbiesInput === '') {
            setHobbiesError('Veuillez entrer un hobby');
            return;
        }
        setHobbiesList([...hobbiesList, {id: hobbiesInput.toLowerCase(), nom: hobbiesInput}]);
        setHobbiesInput('');
    }

    return (
        <>
            <h2>Entrez vos hobbies</h2>
            <input
                value={hobbiesInput}
                onChange={handleHobbies}
                className="bg-neutral-500 p-2 w-full"
                type="text"
                placeholder="Hobbies"
            />
            <p className="text-red-600 text-sm">{hobbiesError}</p>
            <ul>
                {hobbiesList.map((hobby) => {
                    return (
                        <li
                            key={hobby.id}
                            style={{
                                padding: "10px",
                                border: "1px solid white",
                                margin: "0.5em",
                            }}
                        >
                            {hobby.nom}
                        </li>
                    );
                })}
            </ul>
            <Bouton gereClique={submit}>Ajouter le hobby</Bouton>
        </>
    );
}

Hobbies.propTypes = {
    hobbies: PropTypes.array.isRequired,
};
