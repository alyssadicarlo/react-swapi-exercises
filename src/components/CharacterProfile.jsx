import { useParams } from "react-router-dom";

const CharacterProfile = ({ characters }) => {
    const { id } = useParams();

    const character = characters[id];

    return (
        <article>
            <h1>{character.name}</h1>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Eye Color: {character.eye_color}</p>
        </article>
    );
}

export default CharacterProfile;