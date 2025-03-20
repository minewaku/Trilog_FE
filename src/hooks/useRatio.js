import { useRef, useState, useEffect, useContext } from 'react';
import { WindowContext } from '~/contexts';

const useRatio = (ratio = { hr: 1, wr: 1 }) => {
    const { windowSize } = useContext(WindowContext);
    // console.log("ratio: ", ratio)
    // console.log("windowSize: ", windowSize)
    const ref = useRef(null); // Reference to the component
    const [size, setSize] = useState({ height: 0, width: 0 });

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ height: windowSize.height * ratio.hr, width: windowSize.width * ratio.wr });
        });

        observer.observe(element);

        // Cleanup the observer when the component unmounts or ref changes
        return () => observer.disconnect();
    }, []);

    return [ref, size]; // Returning both the ref and the size;
};

export default useRatio;
