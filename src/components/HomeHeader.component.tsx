import { motion } from 'framer-motion';

import logo from './../assets/images/Rick_and_Morty.svg.webp';
import mainbg from './../assets/images/rickmorty3.webp';
import rickandmorty_dab from './../assets/images/prueba.webp';

import styles from '../styles/styles.module.css';

const HomeHeader = () => {
  return (
    <header className={styles.header}>
        <div className={styles.homeHeaderSection}>
        {/* //! Header Section  */ }
          <motion.div 
            initial= {{ opacity: 0, x:-100}}
            whileInView={{ opacity: 1, x:0, rotate:[0,4,0] }}
            transition={{ duration: 1, bounce: 0.6, }}
            viewport={{ once: true }}
            className={styles.homeHeader}>
            <div className={styles.homeTitle}>
              <motion.h2 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0}}
                transition={{duration:1, type:'tween', delay: 0.5}}
              >
                Welcome 
              </motion.h2>
              <motion.img 
                src={logo} 
                alt="rick-morty-logo" 
                style={{ width: '30em', marginTop: '8rem' }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: [0,1], scale: [1.15,1], x:0 }}
                transition={{duration:0.6, type:'spring' ,delay: 0.5, bounce: 0.6}}
              />
              <motion.h2
                className={styles.challenge}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{duration:0.6,delay: 0.5}}
              >Challenge</motion.h2>
              <motion.img 
                src={rickandmorty_dab} 
                alt="misterio" 
                style={{ width:'150px', height:'150px', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: "50%", background: 'black' ,boxShadow:'0px 3px 5px rgba(0,0,0,0.4)'}}
                initial={{ opacity: 0, y:100}}
                animate={{ opacity: 1, y:10 }}
                transition={{duration:0.6, delay: 0.5}}
              />
            </div>

            <motion.img 
              src={mainbg} 
              alt="rock y morty" 
              className={styles.homeImage} 
              initial={{ opacity: 0, x:-100}}
              animate={{ opacity: 1, x:0 }}
              transition={{duration:1, type:'spring', bounce: 0.2, delay: 1}}
            />
          </motion.div>
        </div>
      </header>
  )
}

export default HomeHeader