import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
    
    return (
        <>
            {characters.map((character, index) => {
                return <li key={index}><Link to={`/character/${index}`}>{character.name}</Link></li>
            })}
        </>
    );
}

export default CharacterList;