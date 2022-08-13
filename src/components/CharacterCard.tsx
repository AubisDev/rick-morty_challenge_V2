import { motion } from 'framer-motion';
import styles from '../styles/styles.module.css';
import { CardsData } from './Characters.Home';

interface Props{
  charactersData: CardsData;
  index?:number;
}



export const CharacterCard = ({charactersData ,index}:Props) => {
  const { name, color, image } = charactersData;
  return (
    <motion.div
      initial={{  opacity: 0, x: index % 2 === 0 ? -50 : 50, y: -50  }} 
      whileInView={{  opacity: 1, x: 0, y: 0}}
      whileHover={{  scale: 1.15, transition:{ duraton: 0.3 }}}
      transition={{ duration : 0.6, delay: index && index * 0.3 }}
      className={`${styles.card} `} style={{background: color}}>
      <img src={image} alt="profile" style={{ maxWidth: '100%', borderRadius:'10px 10px 0 0' }} />
      <div style={{color: 'rgba(0,0,0,0.75)'}}>
        <h5 style={{fontSize:'1em', fontWeight:500, fontFamily:`'PT Sans', sans-serif`}}>{name}</h5>
        
      </div>
    </motion.div>
  )
}

