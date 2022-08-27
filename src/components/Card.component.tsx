import { createContext, ReactElement, useContext } from "react"
import styles from '../styles/styles.module.css';
import chars from '../styles/chars.module.css';
import { motion } from 'framer-motion';
import { CardsContextProps, Character } from '../interfaces/interfaces';
import { useLocation, useNavigate } from "react-router-dom";

export const CardContext = createContext({} as CardsContextProps);
const { Provider } = CardContext;

interface CardProps { 
  children: ReactElement | ReactElement[];
  index: number;
  character: Character;
}

export const Card = ({children,  index, character }: CardProps ) => {

  const location = useLocation();
  const effects = {
    hover: { scale: 1.15, transition:{ duraton: 0.3 } },
    transition: { duration : 0.8, delay: index && index * 0.4 }
  } 
  return (
    <Provider value={{ character }}>
      <motion.div
        initial={{  opacity: 0, y: -50  }} 
        whileInView={{  opacity: 1, x: 0, y: 0}}
        whileHover={ location.pathname === '/Characters' ? {} : effects.hover }
        transition={ location.pathname === '/Characters' ? {} : effects.transition}
        className={`${ location.pathname === '/Characters' ?  chars.card : styles.card} `} 
        style={{background: character.color}}
      >
        {children}
      </motion.div>
    </Provider>
  )
}


Card.Title = function CardTitle({ title }: {title?:string;}) {
  const { character } = useContext( CardContext );
  return (
    <div style={{color: 'rgba(0,0,0,0.75)'}}>
      <h5 className={`${ location.pathname === '/Characters' ?  chars.cardTitle : styles.cardTitle} `}
      >
        {title ? title : character.name}
      </h5>
    </div>
  )
}



Card.Image = function CardImage({image=""}:{image?:string;} ){
  const { character } = useContext( CardContext );
  return (
     <img 
      src={image ? image : character.image} 
      alt="profile" 
      className={`${ location.pathname === '/Characters' ?  chars.cardImage : styles.cardImage} `} 
    />
  )
}

interface CardTextProps {
  text?: string| undefined; 
  title?: string;
  style?: React.CSSProperties;
}

Card.Text = function CardText({ title, text, style }: CardTextProps) {
  return (
    <div className={chars.cardText}>
      <p>{title}:</p> 
      <span style={style}>{text}</span>
    </div>
  )
}


Card.Content = function CardContent({ children }: {children: ReactElement | ReactElement[] }){
  return(
    <div className={chars.cardContent}>
      {children}
    </div>
  )
}

export default Card;