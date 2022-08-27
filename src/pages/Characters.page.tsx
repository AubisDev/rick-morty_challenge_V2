import chars from '../styles/chars.module.css';
import { Card, Pagination } from '../components';
import { useCharactersFetch } from '../hooks/useCharactersFetch.hook';



const Characters = () => {

  const { characters, actualPage, handlePagination } = useCharactersFetch();

  return (
    <main className={chars.container}>
      <div className={chars.cards}>
        {
          characters.map( (character,i) => (
            <Card key={`${character.name}+${i}`} character={character} index={i}>
              <Card.Image image={character.image}/>
              <Card.Content>
                <Card.Title title={character.name}/>
                <Card.Text  title="Gender" text={character.gender}  />
                <Card.Text  
                  title="Status" 
                  text={character.status} 
                  style={ character.status === 'Alive' ? {color:'green'} : character.status === 'Dead' ? {color:'red'} : {color:'yellow'}}
                />
                <Card.Text  title="Specie" text={character.species}  />
                <Card.Text  title="Origin" text={character.origin?.name}  />
              </Card.Content>
            </Card>
          ))
        }
      </div>
      <Pagination page={actualPage} handlePagination={handlePagination}/>
    </main>
  )
}

export default Characters