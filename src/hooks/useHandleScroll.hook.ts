import { useRef, useState } from 'react';


export const useHandleScroll = () => {
    const divRef = useRef<HTMLInputElement>(null);
    const [background, setBackground] = useState(''); 

    const handleScrollAndBackground = () => {
        const div = divRef?.current;
        if( div ){
            const { y: scrollHeight } = div.getBoundingClientRect();
            const backgroundColor = scrollHeight <= -1500 ? '#03111B' : scrollHeight <= -500 ? '#9dd4d9' : '#6c059c';
            setBackground(backgroundColor);
        }
    }

    const addScrollListener = () => {
        window.addEventListener("scroll", handleScrollAndBackground);
    }

    const removeScrollListener = () => {
        window.removeEventListener('scroll', handleScrollAndBackground);
    }

    return {
        addScrollListener,
        removeScrollListener,
        background,
        divRef
    }

}