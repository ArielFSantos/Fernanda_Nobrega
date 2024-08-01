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
                    </div>
                    <div className="bg-2">

                    </div>
                    <div className="bg-3">

                    </div>
                    <div className="bg-4">

                    </div>
                </Slider>
            </main>
        </>
    );
}

export default Home;
