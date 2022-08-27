import { useRef, useState } from 'react';
import { MotionValue, useScroll } from 'framer-motion';


export const useHandleScroll = () => {
    // const divRef = useRef<HTMLInputElement>(null);
    const [background, setBackground] = useState('');
    const scroll = useScroll();

    const handleScrollAndBackground = () => {
        const divRef = scroll.scrollY;
        const { current: scrollHeight } = divRef;
        const backgroundColor = scrollHeight >= 1600 ? '#03111B' : scrollHeight >= 600 ? '#9dd4d9' : '#6c059c';
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