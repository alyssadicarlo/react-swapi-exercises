import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterProfile from './components/CharacterProfile';

import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await _fetchCharacters();
      setCharacters(response);
    })();
  }, [setCharacters]);

  const _fetchCharacters = async () => {
    const response = await fetch(
      `https://swapi.dev/api/people/`
    ).then(response => response.json());
    return response.results;
  }

  return (
    <div className="App">
      <Router>
        <Route path="/">
          <CharacterList characters={characters} />
        </Route>
        <Route path="/character/:id">
          <CharacterProfile characters={characters} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
