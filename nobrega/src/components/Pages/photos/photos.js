
import React from 'react';
import Masonry from 'react-masonry-css';
import styles from './photos.module.css';

const images = [
    'https://picsum.photos/202/100',
    'https://picsum.photos/201/100',
    'https://picsum.photos/101/100',
    'https://picsum.photos/102/100',
    'https://picsum.photos/203/100',
    'https://picsum.photos/104/100',
    'https://picsum.photos/205/100',
    'https://picsum.photos/106/100',
    
];

function Photos() {
    const breakpointColumnsObj = {
        default: 5, // 3 colunas para telas padrão
        1100: 3,    // 2 colunas para telas maiores que 1100px
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
