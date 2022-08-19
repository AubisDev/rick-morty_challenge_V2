import { motion } from "framer-motion"
import styles from '../styles/styles.module.css';
import season1 from '../assets/images/season1.jpg'
import season2 from '../assets/images/season2.webp'
import season3 from '../assets/images/season3.webp'
import season4 from '../assets/images/season4.webp'
import season5 from '../assets/images/season5.webp'

const seasons = ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5' ]



export const EpisodeSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y:-100}}
      whileInView={{ opacity: 1, y: 0 , transition:{ duration: 0.6, ease:"easeIn" }}}
      className={styles.EpisodesSectionContainer}>
        <h2 className={styles.title}>Discover all seasons episodes </h2>
        <div className={styles.seasonContainer}>
          <div className={styles.seasons}>
            {
              seasons.map( season => (
                <div key={season} className={styles.season}>
                  {season}
                </div>
              ))
            }
          </div>
          <div className={styles.seasonContent}>
            <div className={styles.episodesContent} style={{backgroundImage: season1}} >
              <h1 > Season 1 </h1>
              <h4 style={{ width:'90%', display: 'flex', flexDirection:'row', justifyContent:'space-evenly', padding:0, margin:0}}> <span style={{padding:'0.5rem 0'}}>S01E01</span> <span style={{padding:0}}>Pilot</span></h4>
              <h4 style={{ width:'90%', display: 'flex', flexDirection:'row', justifyContent:'space-evenly', padding:0, margin:0}}> <span style={{padding:'0.5rem 0'}}>S01E01</span> <span style={{padding:0}}>Pilot</span></h4>
              <h4 style={{ width:'90%', display: 'flex', flexDirection:'row', justifyContent:'space-evenly', padding:0, margin:0}}> <span style={{padding:'0.5rem 0'}}>S01E01</span> <span style={{padding:0}}>Pilot</span></h4>
              <h4 style={{ width:'90%', display: 'flex', flexDirection:'row', justifyContent:'space-evenly', padding:0, margin:0}}> <span style={{padding:'0.5rem 0'}}>S01E01</span> <span style={{padding:0}}>Pilot</span></h4>
              <h4 style={{ width:'90%', display: 'flex', flexDirection:'row', justifyContent:'space-evenly', padding:0, margin:0}}> <span style={{padding:'0.5rem 0'}}>S01E01</span> <span style={{padding:0}}>Pilot</span></h4>
              <h4 style={{ width:'90%', display: 'flex', flexDirection:'row', justifyContent:'space-evenly', padding:0, margin:0}}> <span style={{padding:'0.5rem 0'}}>S01E01</span> <span style={{padding:0}}>Pilot</span></h4>
              <h4 style={{ width:'90%', display: 'flex', flexDirection:'row', justifyContent:'space-evenly', padding:0, margin:0}}> <span style={{padding:'0.5rem 0'}}>S01E01</span> <span style={{padding:0}}>Pilot</span></h4>
              <h4 style={{ width:'90%', display: 'flex', flexDirection:'row', justifyContent:'space-evenly', padding:0, margin:0}}> <span style={{padding:'0.5rem 0'}}>S01E01</span> <span style={{padding:0}}>Pilot</span></h4>
              <h4 style={{ width:'90%', display: 'flex', flexDirection:'row', justifyContent:'space-evenly', padding:0, margin:0}}> <span style={{padding:'0.5rem 0'}}>S01E01</span> <span style={{padding:0}}>Pilot</span></h4>
            </div>
          </div>
        </div>
      
    </motion.section>
  )
}

