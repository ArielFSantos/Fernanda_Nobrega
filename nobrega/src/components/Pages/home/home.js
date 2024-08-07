// src/components/Pages/home/Home.js
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import './home.css';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../../topButton/ScrollToTopButton';

function Home() {
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
    const [isSliderVisible, setIsSliderVisible] = useState(false);

    const welcomeRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === welcomeRef.current) {
                    setIsWelcomeVisible(entry.isIntersecting);
                }
                if (entry.target === sliderRef.current) {
                    setIsSliderVisible(entry.isIntersecting);
                }
            });
        }, { threshold: 0.1 });

        const welcomeElement = welcomeRef.current;
        const sliderElement = sliderRef.current;

        if (welcomeElement) observer.observe(welcomeElement);
        if (sliderElement) observer.observe(sliderElement);

        return () => {
            if (welcomeElement) observer.unobserve(welcomeElement);
            if (sliderElement) observer.unobserve(sliderElement);
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
    };

    return (
        <>
            <div>
                <div
                    ref={welcomeRef}
                    className={`welcomeHome ${isWelcomeVisible ? 'fade-in' : 'hidden'}`}
                >
                    <h1 className='logoHome'>Fernanda Nóbrega</h1>
                    <h1 className='tittleHome'>Transforme seus momentos em memórias eternas.</h1>
                    <Link to="/contact">
                        <button className='buttonHome'>Solicite um Orçamento</button>
                    </Link>
                </div>
                <main className='contain'>
                    <h1 className='titleJob'>Serviços</h1>
                    <p className='textJob'>Bem-vindo ao meu espaço dedicado à arte de capturar momentos únicos. Sou uma fotógrafa especializada em fotografia documental: histórias reais através de eventos, ensaios pessoais e retratos de família. Meu trabalho é voltado para registrar emoções autênticas e criar memórias visuais que duram para sempre. Explore o site e descubra como podemos eternizar juntos os seus momentos especiais.
                    </p>
                    <div
                        ref={sliderRef}
                        className={`slider-container ${isSliderVisible ? 'fade-in' : 'hidden'}`}
                    >
                        <Slider {...settings}>
                            <div className="bg-1"></div>
                            <div className="bg-2"></div>
                            <div className="bg-3"></div>
                            <div className="bg-4"></div>
                        </Slider>
                    </div>
                    <Link to="/photos">
                        <button className='buttonHome'>Mais Fotos</button>
                    </Link>
                </main>
                <ScrollToTopButton /> 
            </div>
        </>
    );
}

export default Home;
