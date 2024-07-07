// src/components/Pages/photos/Photos.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
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
    'https://picsum.photos/202/100',
    'https://picsum.photos/201/100',
    'https://picsum.photos/101/100',
    'https://picsum.photos/102/100',
    'https://picsum.photos/203/100',
    'https://picsum.photos/104/100',
    'https://picsum.photos/205/100',
    'https://picsum.photos/106/100',
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
    const [open, setOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const onOpenModal = (index) => {
        setSelectedImageIndex(index);
        setOpen(true);
    };

    const onCloseModal = () => {
        setOpen(false);
    };

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const breakpointColumnsObj = {
        default: 5, // 5 colunas para telas padrão
        1100: 3,    // 3 colunas para telas maiores que 1100px
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
                    <div key={index} className={styles.fotos} onClick={() => onOpenModal(index)}>
                        <img src={src} alt={`Gallery Image ${index + 1}`} />
                    </div>
                ))}
            </Masonry>

            {/* Modal para exibir a imagem em tamanho maior */}
            <Modal open={open} onClose={onCloseModal} center>
                <div className={styles.modalContent}>
                    <button onClick={handlePrev} className={styles.navButton}>&#10094;</button>
                    <img src={images[selectedImageIndex]} alt={`Gallery Image ${selectedImageIndex + 1}`} className={styles.modalImage} />
                    <button onClick={handleNext} className={styles.navButton}>&#10095;</button>
                </div>
            </Modal>
        </div>
    );
}

export default Photos;
