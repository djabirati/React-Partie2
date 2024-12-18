import './App.css'
import {Menu} from "./components/containers/Menu/Menu.jsx";
import {Compteur} from "./components/containers/Compteur/Compteur.jsx";
import {ContactForm} from "./components/containers/ContactForm/ContactForm.jsx";

function App() {

  return (
    <>
        <Menu>
            <Compteur/>
        </Menu>
        <ContactForm/>
    </>
  )
}

export default App
