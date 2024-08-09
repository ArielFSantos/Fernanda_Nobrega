// src/components/Pages/home/Home.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) { // Ajuste o valor conforme necessário
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
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
                <div className='welcomeHome'>
                    <h1 className='logoHome'>Fernanda Nóbrega</h1>
                    <h1 className='tittleHome'>Transforme seus momentos em memórias eternas.</h1>
                    <Link to="/contact">
                        <button className='buttonHome'>Solicite um Orçamento</button>
                    </Link>
                </div>
                <main className='contain'>
                    <h1 className='titleJob'>Serviços Realizados</h1>
                    <p className='textJob'>Registro fotográfico de Aniversários, festas infantis, reencontro de formandos e muito mais.</p>
                    <Slider {...settings}>
                        <div className="bg-1"></div>
                        <div className="bg-2"></div>
                        <div className="bg-3"></div>
                        <div className="bg-4"></div>
                    </Slider>
                    {showScrollToTop && (
                        <a href="#top" className='scroll-to-top'>
                            <span className='arrow-up'>&uarr;</span>
                        </a>
                    )}
                </main>
            </div>
        </>
    );
}

export default Home;
