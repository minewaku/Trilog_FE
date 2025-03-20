import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, currentIndex, onIndexChange }) => {
    const handlePrev = () => {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        onIndexChange((currentIndex + 1) % images.length);
    };

    return (
        <div className="relative h-full w-full">
            <img src={images[currentIndex] || '/placeholder.svg'} alt="Post" className="h-full w-full object-contain" />
            {images.length > 1 && (
                <>
                    <button className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-1" onClick={handlePrev}>
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-1" onClick={handleNext}>
                        <ChevronRight className="h-6 w-6" />
                    </button>
                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-1">
                        {images.map((_, index) => (
                            <div key={index} className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageCarousel;
