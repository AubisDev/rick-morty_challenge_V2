import {  useState } from 'react';
import {  useScroll } from 'framer-motion';


export const useHandleScroll = () => {
    const [background, setBackground] = useState('');
    const { scrollY }= useScroll();

    const handleScrollAndBackground = () => {
        const backgroundColor = scrollY.get() >= 1600 ? '#03111B' : scrollY.get() >= 600 ? '#9dd4d9' : '#6c059c';
        setBackground(backgroundColor);
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
    }

}