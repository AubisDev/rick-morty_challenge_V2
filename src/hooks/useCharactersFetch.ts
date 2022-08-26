import axios from 'axios';
import { useState, useEffect } from 'react';
import { Character } from "../interfaces";





export const useCharactersFetch = ( page = 1 ) => {
    
    const [characters, setCharacters] = useState<Character[]>([]);
    const [actualPage, setActualPage] = useState<number>(page);

    const handlePagination = (e:any ) => {
        setActualPage(e.nextSelectedPage +  1); 
    }

    useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }, [actualPage])

    useEffect(() => {
        actualPage === 1 
            ? axios.get( "https://rickandmortyapi.com/api/character" ).then( response => setCharacters( response.data.results))
            : axios.get( `https://rickandmortyapi.com/api/character?page=${actualPage}` ).then( response => setCharacters( response.data.results))
            
    }, [actualPage])
    

    return {
        characters,
        setCharacters,
        actualPage,
        handlePagination
    }

}