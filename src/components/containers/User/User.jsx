import PropTypes from "prop-types";
import {Fullname} from "../Fullname/Fullname.jsx";
import {Hobbies} from "../Hobbies/Hobbies.jsx";

export  function User() {
    return (
        <div>
            <Fullname />
            <Hobbies />
        </div>
    )
}
User.propTypes = {
    utilisateur: PropTypes.object,
}