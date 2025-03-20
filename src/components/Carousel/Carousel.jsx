import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Fullscreen } from 'lucide-react';

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    const handleOpenImage = () => {
        const imgSrc = slides[curr]?.props?.src;
        if (imgSrc) {
            window.open(imgSrc, '_blank');
        }
    };

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, next]);

    return (
        <div className="relative h-full w-full overflow-hidden">
            <div
                className="flex h-full w-full transition-transform duration-500 ease-out"
                style={{
                    width: `${slides.length * 100}%`,
                    transform: `translateX(-${(curr * 100) / slides.length}%)`,
                }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className="z-10 flex h-full w-full flex-shrink-0 justify-center" style={{ width: `${100 / slides.length}%` }}>
                        {slide}
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="rounded-full bg-white/80 p-1 text-gray-800 opacity-60 shadow hover:bg-white">
                    <FaAngleLeft size={18} />
                </button>
                <button onClick={next} className="rounded-full bg-white/80 p-1 text-gray-800 opacity-60 shadow hover:bg-white">
                    <FaAngleRight size={18} />
                </button>
            </div>

            <div className="absolute left-0 right-0 top-0 flex justify-end p-4">
                <button onClick={handleOpenImage} className="rounded-full bg-white/80 p-2 text-gray-800 opacity-40 shadow hover:bg-white hover:opacity-60">
                    <Fullscreen size={20} />
                </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`h-2 w-2 rounded-full transition-all hover:bg-green-50 ${curr === i ? 'bg-white bg-opacity-80 p-1' : 'bg-white bg-opacity-20'}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
