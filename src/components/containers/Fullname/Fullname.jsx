import PropTypes from "prop-types";
import {Firstname} from "../../ui/Firstname/Firstname.jsx";
import {Lastname} from "../../ui/Lastname/Lastname.jsx";


export  function Fullname({ nom, prenom }) {
    return (
        <div>
            <Lastname nom={nom} />
            <Firstname prenom={prenom} />
        </div>
    )
}

Fullname.propTypes = {
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
}