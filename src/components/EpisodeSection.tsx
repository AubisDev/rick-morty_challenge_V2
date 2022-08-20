import { motion } from "framer-motion"
import styles from '../styles/styles.module.css';
import { HomeCharacterSectionTitle } from './Characters.Home';
import { getSeasons, useSelectSeason } from '../hooks/useSelectSeason';

//! ****
const seasons = ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5' ]
//! ****


export const EpisodeSection = () => {

  
  const { seasonData, fetchEpisodesData, currentSeason }  = useSelectSeason();
  const seasons:string[] = getSeasons();
  
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
              seasons.map( (season:string, i:number ) => (
                <motion.div 
                  initial={{  opacity: 0, y: -50  }} 
                  whileInView={{  opacity: 1, y: 0}}
                  transition={{ duration : 0.6, delay: i && i * 0.2 }}
                  key={season} 
                  className={styles.season}
                  onClick={ () => fetchEpisodesData(i+1) } 
                >
                  {season}
                </motion.div>
              ))
            }
          </div>
          <div className={styles.seasonContent}>
            <div className={styles.episodesContent} >
              <h2>{`Season ${currentSeason}`} </h2>
              {
                seasonData?.map( (season) => (
                  <h4 key={season.id} > <span>{season.episode}</span> <span>{season.name} </span></h4>
                ))
              }
            </div>
          </div>
        </div>
      
    </motion.section>
  )
}

