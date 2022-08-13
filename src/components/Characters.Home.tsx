import { motion } from 'framer-motion';
import styles from '../styles/styles.module.css';
import characters from '../assets/images/RickAndMorty-TotalRickall-900x900.jpg'
import pointing from '../assets/images/rm-pointing.png'
import { CharacterCard } from './CharacterCard';
import rick from '../assets/images/1.jpeg';
import morty from '../assets/images/2.jpeg';
import summer from '../assets/images/3.jpeg';
import { NavLink } from 'react-router-dom';

export interface CardsData {
  name: string;
  color: string;
  image: string;
}

const CardData:CardsData[] = [
  { name: 'Rick Sanchez', color: 'rgb(62, 214, 214)', image: rick },
  { name: 'Morty Smith', color: 'rgb(240, 233, 43)', image: morty },
  { name: 'Summer Smith', color: 'rgb(232, 128, 222)', image: summer }
]
export const HomeCharacters = () => {
  return (
    <motion.div
      className={styles.SectionContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5}}
      >
      <div className={styles.SectionContent}>
        <h2 style={{ fontSize:'4rem', padding: '0.3em 0', fontFamily:`'Amatic SC', cursive`, fontWeight:700, letterSpacing:'3px', color:'rgba(181, 17, 214, 1)'  }}>Details of your favorite characters</h2>
      
        <div className={styles.content}>
          <img src={ characters } alt="characterimg"  style={{ height: '525px',paddingLeft: '1em'}}/>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative'}}>
            <div style={{ display:'flex', flexDirection:'row', marginTop:'4em'}}>
              {
                CardData.map( (char,i) => (
                  <CharacterCard charactersData={char} index={i}/>)
                )
              }
            </div>
            <NavLink to='characters' className={styles.button}>GO TO CHARACTERS PAGE</NavLink>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

