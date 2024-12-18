import {useState} from "react";
import {Bouton} from "../../ui/Button/Button.jsx";

export function ContactForm() {

    const [fullnameInput, setFullname] = useState('');
    const [fullnameError, setFullnameError] = useState('');


    const [messageInput, setMessageInput] = useState('');
    const [messageError, setMessageError] = useState('');

    function handleFullname(event) {

        const value = event.target.value;
        setFullname(value);
        setFullnameError('');
    }

    function handleMessage(e) {
        setMessageInput(e.target.value);
        setMessageError();
    }
    function submit() {
       if (fullnameInput === '') {
           setFullnameError('Nom et prenom obligatoire');
           return
       }
       if (messageInput === '' ||messageInput > 500) {
           setMessageError('Message Obligatoire ! (Max 500 caracteres)');
       }
       alert('Contact ' + fullnameInput);
       setFullname('');

    }

    return (
        <div className="p-4">
            <h2>Contactez nous</h2>
            <input
                value={fullnameInput}
                onChange={handleFullname}
                className="bg-neutral-800 p-2 w-full"
                type="text"
                placeholder="Nom et prénom"/>
            <p className="text-red-600 text-sm">{fullnameError}</p>

            <textarea
                className="bg-neutral-800 p-2 w-full"
                onChange={handleMessage}
                placeholder="Entrez un message">{messageInput}</textarea>
            <p>{messageError}</p>
            <Bouton gereClique={submit}>Envoyer le message</Bouton>
        </div>

    )
}