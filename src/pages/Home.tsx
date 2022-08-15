
import styles from './../styles/styles.module.css';
import { motion } from 'framer-motion';
import { HomeCharacters } from '../components/Characters.Home';
import { useEffect, useRef, useState } from 'react';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
  const divRef = useRef(null);
  const [background, setBackground] = useState(''); 

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y  } = div.getBoundingClientRect();
      const backgroundColor = y <= -300 ? '#6c059c' : '#242424';
      setBackground(backgroundColor);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  return (
    <main className={styles.homeContainer} ref={divRef} style={{ backgroundColor: background }}>
      <HomeHeader/>     
      <HomeCharacters/>
      
    </main>
  )
}

export default Home