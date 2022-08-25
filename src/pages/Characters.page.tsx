import chars from '../styles/chars.module.css';
import { useState, useEffect } from 'react';
import { Card, Pagination } from '../components';
import { Character } from '../interfaces/interfaces';
import axios from 'axios';

interface Props{
  page: number;
  setPage: (page:number) => void;
}

const Characters = ({ page, setPage}:Props) => {

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios.get( "https://rickandmortyapi.com/api/character" ).then( response => setCharacters( response.data.results))
  }, [])


  return (
    <main className={chars.container}>
      <div className={chars.cards}>
        {
          characters.map( (character,i) => (
            <Card key={character.name} character={character} index={i}>
              <Card.Image image={character.image}/>
              <Card.Content>
                <Card.Title title={character.name}/>
                <Card.Text  title="Gender" text={character.gender}  />
                <Card.Text  title="Status" text={character.status}  />
                <Card.Text  title="Specie" text={character.species}  />
                <Card.Text  title="Origin" text={character.origin?.name}  />
              </Card.Content>
            </Card>
          ))
        }

        <Pagination page={page} setPage={setPage}/>
      </div>
    </main>
  )
}

export default Characters