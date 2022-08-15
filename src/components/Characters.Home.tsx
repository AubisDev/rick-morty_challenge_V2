import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from './Card/Card';

import characters from '../assets/images/RickAndMorty-TotalRickall-900x900.jpg';
import styles from '../styles/styles.module.css';
import { GetCharactersHomeSectionData } from '../data/CharactersData';

const sentence = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.04
    }
  }
}

const letter = {
  hidden: { opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0
  }
}

export const HomeCharacters = () => {
  const CardsData = GetCharactersHomeSectionData();
  
  return (
    <section className={styles.SectionContainer} >
      <div className={styles.SectionContent}>
        <HomeCharacterSectionTitle/>
        <div className={styles.content}>
          <img src={ characters } alt="characterimg"  style={{ height: '525px',paddingLeft: '1em'}}/>
          <div className={styles.cardsContainer}>
            <div className={styles.cards}>
              {
                CardsData.map( (character,i) => (
                  <Card character={character} index={i} >
                    <Card.Image />
                    <Card.Title  />
                  </Card>
                ))
              }
            </div>
            <NavLink to='characters' className={styles.button}>GO TO CHARACTERS PAGE</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}



 {/* !Colocado aqui porque es pura logica de framer motion para su animacion */}
const HomeCharacterSectionTitle = () =>{
  return (
    <motion.div 
      variants={sentence}
      initial="hidden"
      animate="visible"
      className={styles.charactersTitle}
    >
    { 'Details of your favorite characters'.split('').map( (letra, i) => (
        <motion.h2
          key={letter + "-" + i}
          variants={letter}
          style={{ padding:'0.25rem'}}
        >
          {letra}
        </motion.h2>
      )
    )}
    </motion.div>
  )
}
