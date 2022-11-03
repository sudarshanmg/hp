import { Fragment } from 'react';
import Card from '../Card/Card';
import classes from './Movies.module.css';

const Movies = (props) => {
  const characters = props.characters.map((character) => (
    <Card>
      <div>
        <img
          src={
            character.image
              ? character.image
              : 'https://imgs.search.brave.com/bAK-J69KAiK17w_Cj9I7KGgb_1BeCun65G6PpKPg6bc/rs:fit:532:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/ZjBqNGJ6OEFST19O/SFFWNU9Mc0JRSGFH/bSZwaWQ9QXBp'
          }
          alt="Character"
          className={classes.image}
        />
      </div>
      <div className={classes['details-container']}>
        <h1 className={classes.name}>{character.name}</h1>
        <ul className={classes.details}>
          <li> <h2> House: {character.house}</h2></li>
          <li><h2>DOB: {character.dateOfBirth}</h2></li>
          <li><h2>Ancestry: {character.ancestry}</h2></li>
          <li><h2>Patronus: {character.patronus}</h2></li>
          {/* <li><h2>{character.wand}</h2></li> */}
        </ul>
      </div>
    </Card>
  ));

  return <Fragment>{characters}</Fragment>;
};

export default Movies;
