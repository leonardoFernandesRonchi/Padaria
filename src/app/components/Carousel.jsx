"use client"
import { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
        }, 5000); // Altere o intervalo conforme necessário

        return () => clearInterval(intervalId);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
    };

    const slideTo = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-[50vh] overflow-hidden md:h-96">
                {/* Renderizando os itens do carrossel */}
                {['chocolade.jpg', 'donuts.jpg', 'vecteezy.jpg', 'croissant.jpg', 'paes.jpg'].map((item, index) => (
                    <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`} data-carousel-item>
                        <img
                            src={`/${item}`}
                            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Slide ${index + 1}`}
                            style={{ minWidth: '100%', minHeight: '100%' }}
                        />
                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {[...Array(5)].map((_, index) => (
                    <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-300'}`} aria-current={index === currentSlide} aria-label={`Slide ${index + 1}`} onClick={() => slideTo(index)} />
                ))}
            </div>
            {/* Slider controls */}
            <button type="button" className="absolute top-1/2 z-30 flex items-center justify-center h-10 w-10 px-4 ml-4 bg-white bg-opacity-30 rounded-full cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevSlide}>
                {/* Ícone de seta esquerda */}
            </button>
            <button type="button" className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 px-4 mr-4 bg-white bg-opacity-30 rounded-full cursor-pointer group focus:outline-none" data-carousel-next onClick={nextSlide}>
                {/* Ícone de seta direita */}
            </button>
        </div>
    );
};

export default Carousel;
