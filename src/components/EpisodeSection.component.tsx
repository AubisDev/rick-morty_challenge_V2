import { motion } from "framer-motion"
import styles from '../styles/styles.module.css';
import { HomeCharacterSectionTitle } from './HomeCharacters.component';
import { useFetchAndSelectSeason } from '../hooks/useFetchAndSelectSeason.hook';
import prueba from './../assets/images/temp1.png';
import { SeasonData } from '../interfaces/interfaces';
import { getSeasons } from "../data/SeasonsData";

export const EpisodeSection = () => {
  const { seasonData, fetchEpisodesData, currentSeason }  = useFetchAndSelectSeason();
  const seasons:SeasonData[] = getSeasons();
  
  return (
    <motion.section 
      initial={{ opacity: 0, y:-100}}
      whileInView={{ opacity: 1, y: 0 , transition:{ duration: 0.6, ease:"easeIn" }}}
      className={styles.EpisodesSectionContainer}>
        <div style={{ display:'flex', justifyContent:'center'}}>
          <HomeCharacterSectionTitle title="Discover  all  seasons  episodes"/>
        </div>
        <div className={styles.seasonContainer}>
          <div className={styles.seasons}>
            {
              seasons.map( (season:SeasonData, i:number ) => (
                <motion.div 
                  initial={{  opacity: 0, y: -50  }} 
                  whileInView={{  opacity: 1, y: 0}}
                  transition={{ duration : 0.6, delay: i && i * 0.2 }}
                  key={season.title} 
                  className={`${styles.season} ${ currentSeason === i+1 && styles.activeSeason } `}
                  onClick={ () => fetchEpisodesData(i+1) } 
                > 
                <img src={season.image } />
                  {season.title}
                </motion.div>
              ))
            }
          </div>
          <div className={styles.seasonContent}>
            <div className={styles.episodesContent} >
              <h2>{`Season ${currentSeason}`} </h2>
              {
                seasonData?.map( (season,i) => (
                  <motion.h4 
                    initial={{  opacity: 0, y: -50  }} 
                    whileInView={{  opacity: 1, y: 0}}
                    transition={{ duration : 0.6, delay: i && i * 0.1 }}
                    key={season.id} 
                  > 
                    <span>{season.episode}</span> <span>{season.name} </span>
                  </motion.h4>
                ))
              }
            </div>
          </div>
        </div>
      
    </motion.section>
  )
}

export default EpisodeSection;
