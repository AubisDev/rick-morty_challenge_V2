import axios from 'axios';
import { useState, useEffect } from 'react';

interface SeasonData {
  id: string;
  name: string;
  episode: string;
}

export const useFetchAndSelectSeason = (actualSeason = 1 ) => {

    const [seasonData, setSeasonData] = useState<SeasonData[] >([]);
    const [currentSeason, setCurrentSeason] = useState<number>();

    useEffect(() => {
      fetchEpisodesData(actualSeason)
    }, [])
    

    const fetchEpisodesData = async( season:number ) => {

      const episodeUrlPage1: string = 'https://rickandmortyapi.com/api/episode';
      const episodeUrlPage2: string = 'https://rickandmortyapi.com/api/episode?page=2';
      const episodeUrlPage3: string = 'https://rickandmortyapi.com/api/episode?page=3';

      const requestOne = axios.get(episodeUrlPage1);
      const requestTwo = axios.get(episodeUrlPage2);
      const requestThree = axios.get(episodeUrlPage3);

      await axios.all([requestOne, requestTwo, requestThree]).then( axios.spread((...responses) => {
        const response_1 = responses[0].data.results;
        const response_2 = responses[1].data.results;
        const response_3 = responses[2].data.results;
        const allResponses = response_1.concat(response_2).concat(response_3);
        const filteredData = allResponses.filter( (episodeData:SeasonData) =>  episodeData.episode.startsWith(`S0${season}`) );
        setSeasonData(filteredData)
        setCurrentSeason(season);
      })) .catch( err => {
        console.log(err);
        return []
      })
    }
    
  return {
    seasonData,
    fetchEpisodesData,
    currentSeason
  }
}


export const getSeasons = () => {
  return ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5' ]
} 