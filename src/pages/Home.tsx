
import styles from './../styles/styles.module.css';
import { HomeCharacters } from '../components/Characters.Home';
import { useEffect, useRef, useState } from 'react';
import HomeHeader from '../components/HomeHeader';
import { EpisodeSection } from '../components/EpisodeSection';

const Home = () => {
  const divRef = useRef(null);
  const [background, setBackground] = useState(''); 

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y  } = div.getBoundingClientRect();
      console.log(y);
      const backgroundColor = y <= -1300 ? '#03111B' : y <= -300 ? '#9dd4d9' : '#6c059c';
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
      <EpisodeSection/>
    </main>
  )
}

export default Home