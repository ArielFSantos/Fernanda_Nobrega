// src/components/Pages/home/Home.js
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import './home.css';
import { Link } from 'react-router-dom';

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

        if (welcomeRef.current) observer.observe(welcomeRef.current);
        if (sliderRef.current) observer.observe(sliderRef.current);

        return () => {
            if (welcomeRef.current) observer.unobserve(welcomeRef.current);
            if (sliderRef.current) observer.unobserve(sliderRef.current);
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
                    <h1 className='titleJob'>Serviços Realizados</h1>
                    <p className='textJob'>Registro fotográfico de Aniversários, festas infantis, reencontro de formandos e muito mais.</p>
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
                </main>
            </div>
        </>
    );
}

export default Home;
