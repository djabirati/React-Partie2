import {useContext} from "react";
import {UserContext} from "../../../App.jsx";

export  function Firstname() {
    const user = useContext(UserContext);
    return (<p>{user.prenom}</p>)
}

