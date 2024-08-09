// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import './scrollToTopButton.css'; // Importa o CSS para o botão

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const checkScrollTop = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <span className="arrow-up">&#x21E7;</span>
        </button>
    );
}

export default ScrollToTopButton;
