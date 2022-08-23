import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from './Card.component';

import characters from '../assets/images/RickAndMorty-TotalRickall-900x900.webp';
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
    <motion.section 
      initial={{ opacity: 0, y:-100}}
      whileInView={{ opacity: 1, y: 0 , transition:{ duration: 0.6, ease:"easeIn" }}}
      className={styles.SectionContainer} >
      <div className={styles.SectionContent}>
        <HomeCharacterSectionTitle title="Know  your  favorite  characters"/>
        
        <div className={styles.content}>
          <img src={ characters } alt="characterimg" className={styles.StaticCharsImage}/>
          <div className={styles.cardsContainer}>
            <div className={styles.cards}>
              {
                CardsData.map( (character,i) => (
                  <Card key={character.name} character={character} index={i} >
                    <Card.Image />
                    <Card.Title  />
                  </Card>
                ))
              }
            </div>
            <NavLink to='characters' className={styles.button}>Go to characters page</NavLink>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default HomeCharacters;



interface titleProps {
  title: string;
}

 {/* !Colocado aqui porque es pura logica de framer motion y js para la animacion */}
export const HomeCharacterSectionTitle = ({title}:titleProps) =>{
  return (
    <motion.div 
      variants={sentence}
      initial="hidden"
      animate="visible"
      className={`${styles.charactersTitle} ${styles.blueTitle}`}
    >
    { title.split('').map( (letra, i) => (
        <motion.h2
          key={letter + "-" + i}
          variants={letter}
          // style={{ padding:'0.25rem'}}
        >
          {letra}
        </motion.h2>
      )
    )}
    </motion.div>
  )
}
