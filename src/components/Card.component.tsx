import { createContext, ReactElement, useContext } from "react"
import styles from '../styles/styles.module.css';
import { motion } from 'framer-motion';
import { CardsContextProps, Character } from '../interfaces/interfaces';

export const CardContext = createContext({} as CardsContextProps);
const { Provider } = CardContext;

interface CardProps { 
  children: ReactElement | ReactElement[];
  index: number;
  character: Character;
}

export const Card = ({children,  index, character }: CardProps ) => {
  return (
    <Provider value={{ character }}>
      <motion.div
        initial={{  opacity: 0, y: -50  }} 
        whileInView={{  opacity: 1, x: 0, y: 0}}
        whileHover={{  scale: 1.15, transition:{ duraton: 0.3 }}}
        transition={{ duration : 0.8, delay: index && index * 0.4 }}
        className={`${styles.card} `} 
        style={{background: character.color}}
      >
        {children}
      </motion.div>
    </Provider>
  )
}


Card.Title = function CardTitle() {
  const { character } = useContext( CardContext );
  return (
    <div style={{color: 'rgba(0,0,0,0.75)'}}>
      <h5 className={styles.cardTitle}>{character.name}</h5>
    </div>
  )
}



Card.Image = function CardImage( ){
  const { character } = useContext( CardContext );
  return (
     <img src={character.image} alt="profile" className={styles.cardImage} />
  )
}



Card.Text = function CardText({ text }: {text:string}) {
  return (
    <p>Nombre: {text}</p>
  )
}


export default Card;