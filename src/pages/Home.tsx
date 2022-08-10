import mainbg from './../assets/images/rickmorty3.png';
import prueba from './../assets/images/prueba.png';
import logo from './../assets/images/logo.webp';
import styles from './../styles/styles.module.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <header className={styles.homeMainSection}>
        <div className={styles.homeHeader}>
          <div className={styles.homeTitle}>
            <motion.h2 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0}}
              transition={{duration:1, type:'tween'}}
            >Welcome <span>to</span></motion.h2>
            <motion.img 
              src={logo} 
              alt="rick-morty-logo" 
              style={{ width: '28em', marginTop: '2.5rem' }}
              initial={{ opacity: 0, }}
              animate={{ opacity: [0,1,0,1], scale: [1.15,1,1.15,1] }}
              transition={{duration:1, type:'tween' ,delay: 1}}
            />
            <motion.h2
              className={styles.challenge}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0}}
              transition={{duration:1}}
            >Challenge</motion.h2>
            <motion.img 
              src={prueba} 
              alt="misterio" 
              style={{ width:'150px', height:'150px'}}
              initial={{ opacity: 0, y:100}}
              animate={{ opacity: 1, y:10 }}
              transition={{duration:1}}
            />
          </div>
          <motion.img 
            src={mainbg} 
            alt="rock y morty" 
            className={styles.homeImage} 
            initial={{ opacity: 0, x:-100}}
            animate={{ opacity: 1, x:0 }}
            transition={{duration:1, type:'spring', bounce: 0.2}}
          />
        </div>
        
      </header>
    </main>
  )
}

export default Home