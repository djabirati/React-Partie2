import PropTypes from "prop-types";
import {Fullname} from "../Fullname/Fullname.jsx";
import {Hobbies} from "../Hobbies/Hobbies.jsx";

export  function User({ utilisateur }) {
    return (
        <div>
            <Fullname
                nom={utilisateur.nom}
                prenom={utilisateur.prenom}
            />
            <Hobbies hobbies={utilisateur.hobbies} />
        </div>
    )
}
User.propTypes = {
    utilisateur: PropTypes.object,
}