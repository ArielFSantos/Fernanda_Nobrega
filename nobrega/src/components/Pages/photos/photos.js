// src/components/Pages/photos/Photos.js
import React from 'react';
import Masonry from 'react-masonry-css';
import styles from './photos.module.css';

const images = [
    'https://picsum.photos/200/105',
    'https://picsum.photos/140/200',
    'https://picsum.photos/150/200',
    'https://picsum.photos/100/200',
    'https://picsum.photos/200/100',
    'https://picsum.photos/100/215',
    'https://picsum.photos/200/120',
    'https://picsum.photos/200/110',
];

function Photos() {
    const breakpointColumnsObj = {
        default: 4, // 3 colunas para telas padrão
        1100: 2,    // 2 colunas para telas maiores que 1100px
        700: 1      // 1 coluna para telas menores que 700px
    };

    return (
        <div className={styles.container}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}
            >
                {images.map((src, index) => (
                    <div key={index} className={styles.fotos}>
                        <img src={src} alt={`Gallery Image ${index + 1}`} />
                    </div>
                ))}
            </Masonry>
        </div>
    );
}

export default Photos;
