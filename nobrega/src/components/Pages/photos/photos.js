// src/components/Pages/photos/Photos.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from './photos.module.css';

// Importando imagens locais
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../../photos', false, /\.(png|jpe?g|svg)$/));

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
                        <img src={src} alt={`Portfolio ${index + 1}`} />
                    </div>
                ))}
            </Masonry>

            {/* Modal para exibir a imagem em tamanho maior */}
            <Modal
                open={open}
                onClose={onCloseModal}
                center
                classNames={{
                    modal: styles.customModal // Aplicar a classe personalizada
                }}
            >
                <div className={styles.modalContent}>
                    <button onClick={handlePrev} className={styles.navButton}>&#10094;</button>
                    <img src={images[selectedImageIndex]} alt={`Portfolio ${selectedImageIndex + 1}`} className={styles.modalImage} />
                    <button onClick={handleNext} className={styles.navButton}>&#10095;</button>
                </div>
            </Modal>
        </div>
    );
}

export default Photos;
