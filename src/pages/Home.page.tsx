
import { useEffect} from 'react';
import { HomeCharacters, EpisodeSection, HomeHeader  } from '../components';
import { useHandleScroll } from '../hooks/useHandleScroll.hook';
import styles from './../styles/styles.module.css';

const Home = () => {
  const { addScrollListener, removeScrollListener, background, divRef } = useHandleScroll();

  useEffect(() => {
    addScrollListener();
    return () => {
      removeScrollListener();
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