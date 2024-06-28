import styles from './photos.module.css'

function Photos(){
    return(
        <>
        <div className={styles.container} >
            <div className={styles.fotos}>
                <h1>Evento 1</h1>
                <img src="" alt="" />
            </div>
            <div className={styles.fotos}>Imagem 2</div>
            <div className={styles.fotos}>Imagem 3</div>
            <div className={styles.fotos}>Imagem 4</div>
            <div className={styles.fotos}>Imagem 5</div>
            <div className={styles.fotos}>Imagem 6</div>
            <div className={styles.fotos}>Imagem 7</div>
            <div className={styles.fotos}>Imagem 8</div>
            <div className={styles.fotos}>Imagem 9</div>
            <div className={styles.fotos}>Imagem 10</div>

            
        </div>
        </>
    )
}
export default Photos