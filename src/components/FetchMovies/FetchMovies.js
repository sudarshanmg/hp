import React from 'react';
import Button from '../Button/Button';
import classes from './FetchMovies.module.css';

const FetchMovies = (props) => {


  return (
    <div className={classes.fetch}>
        <Button onClick = {props.fetchCharacters}>
            Fetch Characters
        </Button>
    </div>
  )
}

export default FetchMovies;