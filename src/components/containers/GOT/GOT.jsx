import {useEffect, useState} from "react";

const RECUPERE_PERSO  = "https://thronesapi.com/api/v2/Characters"

async function getPersonnages(){
    const response = await fetch(RECUPERE_PERSO);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        return []
    }

}
export function GOT() {
    const [persos, setPersos] = useState([]);
    useEffect(() => {
        getPersonnages().then((personnages) => {
            setPersos(personnages);
        });
    }, [])

    return (
        <div>
            <h2>Personnage de Game of thrones </h2>
            {
                persos.map((personnage) => {
                    return (
                        <div key={personnage.id}>
                            <h2>{personnage.fullName}</h2>
                            <img src={personnage.imageUrl}/>
                            <p>{personnage.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}