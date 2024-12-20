import {useContext} from "react";
import {UserContext} from "../../../App.jsx";

export  function Lastname() {
    const user = useContext(UserContext);
    return (<p>{user.nom}</p>)
}
