import './App.css'
import {Menu} from "./components/containers/Menu/Menu.jsx";
import {Compteur} from "./components/containers/Compteur/Compteur.jsx";
import {ContactForm} from "./components/containers/ContactForm/ContactForm.jsx";
import {User} from "./components/containers/User/User.jsx";

function App() {
    const user = {
        prenom: "John",
        nom: "Doe",
        age: 35,
        hobbies: [
            { id: 'html', nom: "HTML" },
            { id: 'react', nom: "React" }]
    }
  return (
    <>
        <User utilisateur={user} />
        <Menu>
            <Compteur/>
        </Menu>
        <ContactForm/>
    </>
  )
}

export default App
