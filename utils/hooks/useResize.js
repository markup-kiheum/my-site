import { useState, useEffect } from 'react';

export function useResize() {
    const [ resize, setResize ] = useState(0);

    const windowWidth = () =>{
        setResize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", windowWidth);
        return () => {
            window.removeEventListener("resize",windowWidth)
        }
    });

    return {resize}
}