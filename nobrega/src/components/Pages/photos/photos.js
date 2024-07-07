// src/components/Pages/photos/Photos.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from './photos.module.css';
import image1 from '../../../image/bg_1_g.jpg'
import image2 from '../../../image/bg_2_g.jpg'
import image3 from '../../../image/bg_3_g.jpg'
import image4 from '../../../image/bg_4_g.jpg'
import image5 from '../../../image/bg_1_p.jpg'
import image6 from '../../../image/bg_2_p.jpg'
import image7 from '../../../image/bg_3_p.jpg'
import image8 from '../../../image/bg_4_p.jpg'

const images = [
    image1,
    image5,
    image3,
    image6,
    image1,
    image7,
    image2,
    image4,
    image8,
    image1,
    image5,
    image3,
    image6,
    image1,
    image7,
    image2,
    image4,
    image8,
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
