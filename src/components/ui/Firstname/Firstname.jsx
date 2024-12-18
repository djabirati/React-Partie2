import PropTypes from "prop-types"

export  function Firstname({ prenom }) {
    return (<p>{prenom}</p>)
}

Firstname.propTypes = {
    prenom: PropTypes.string.isRequired,
}