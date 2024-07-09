// src/components/Pages/home/Home.js
import React from 'react';
import Slider from 'react-slick';
import './home.css';

function Home() {
    const settings = {
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false, 
    };

    return (
        <>
            <main>
                <Slider {...settings}>
                    <div className="bg-1">
                        <p>Momentos que duram para sempre.</p>
                    </div>
                    <div className="bg-2">
                        <p>Imortalizando seus melhores momentos com carinho.</p>
                    </div>
                    <div className="bg-3">
                        <p>Criando memórias que você vai amar revisitar.</p>
                    </div>
                    <div className="bg-4">
                        <p>Seu sorriso, nossa paixão em fotografar.</p>
                    </div>
                </Slider>
            </main>
        </>
    );
}

export default Home;
