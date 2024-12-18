import PropTypes from "prop-types"

export  function Lastname({ nom }) {
    return (<p>{nom}</p>)
}

Lastname.propTypes = {
    nom: PropTypes.string.isRequired,
}