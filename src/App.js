import { Fragment } from 'react';
import Header from './components/Header/Header';
import FetchMovies from './components/FetchMovies/FetchMovies';
import Movies from './components/Movies/Movies';
import Loader from './components/Loader/Loader';
import { useState } from 'react';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCharactersHANDLER = async () => {
    setIsLoading(true);
    try{
    const response = await fetch(
      'https://hp-api.herokuapp.com/api/characters/'
    );
    if(!response.ok) {
      setError(true);
      throw new Error('Something went wrong 🙈');
    }
    const data = await response.json();
    setCharacters(data);
  } catch(error) {
      console.log(error.message);
  }
    
    setIsLoading(false);
  };

  return (
    <Fragment>
      <Header />
      <FetchMovies fetchCharacters={fetchCharactersHANDLER} />
      {!isLoading && characters.length > 0 && (
        <Movies characters={characters} />
      )}
      {!isLoading && characters.length === 0 && error && (
        <Loader>Something went wrong... 🙈</Loader>
      )}
      {isLoading && <Loader>{<h2>Loading...</h2 >}</Loader>}
    </Fragment>
  );
};

export default App;
