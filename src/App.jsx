import './App.css'
import {Menu} from "./components/containers/Menu/Menu.jsx";
import {Compteur} from "./components/containers/Compteur/Compteur.jsx";
import {ContactForm} from "./components/containers/ContactForm/ContactForm.jsx";


import {createContext, useEffect, useState} from "react";
import {GOT} from "./components/containers/GOT/GOT.jsx";

export const UserContext = createContext();
function App() {
    const user = {
        prenom: "John",
        nom: "Doe",
        age: 35,
        hobbies: [
            { id: 'html', nom: "HTML" },
            { id: 'react', nom: "React" }]
    }
// console.log(e) -> pour voir les différents évènements
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => { setTime(new Date()); }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])
  return (
    <>
        <GOT />

        <UserContext.Provider value={user} >
            <p>{time.toLocaleTimeString()}</p>
        <Menu>
            <Compteur/>
        </Menu>
        <ContactForm/>
        </UserContext.Provider >
    </>
  )
}

export default App
