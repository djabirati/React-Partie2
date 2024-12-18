import {useState} from "react";
import {Bouton} from "../../ui/Button/Button.jsx";
import PropTypes from "prop-types";

export function Menu({children}) {

    const [isTextVisible, changeText] = useState(false)
    function changeTextButton() {
        changeText(!isTextVisible);
    }

    return (
        <>
            <Bouton gereClique={changeTextButton}>
                {isTextVisible ? 'Hide' : 'Show'}
            </Bouton>
            <div className={isTextVisible ? 'block mt-4 p-4 bg-gray-100 rounded shadow' : 'hidden'}>
                <section>
                    {children}
                </section>
            </div>
        </>
    )
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
}