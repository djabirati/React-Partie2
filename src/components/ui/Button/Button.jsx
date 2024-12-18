import PropTypes from 'prop-types';

Bouton.propTypes = {
    couleur: PropTypes.string,
    children: PropTypes.node.isRequired,
    gereClique: PropTypes.func.isRequired
}

export  function Bouton({ couleur, children, gereClique }) {

    return (
        <button
            onClick={gereClique}
            className="b-none p-2 rounded hover:opacity-75 transition"
        >
            {children}
        </button>
    )
}