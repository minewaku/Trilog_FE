import { createContext, useState, useEffect } from 'react';

const WindowContext = createContext();

const WindowProvider = ({ children }) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            // console.log('Window resized:', window.innerWidth, window.innerHeight); // Debug log
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize]); // ✅ Fix: React will now track changes

    return <WindowContext.Provider value={{ windowSize }}>{children}</WindowContext.Provider>;
};

export { WindowProvider };
export default WindowContext;
