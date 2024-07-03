import styles from './about.module.css'

function About (){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.about}/>
            <h1 className={styles.title}>Olá! Eu sou a Fernanda Nóbrega</h1>
            <p className={styles.text}>
            Uma fotógrafa goiana apaixonada por capturar momentos autênticos e emoções verdadeiras. Desde criança, a fotografia é minha grande paixão e,
            nos últimos 2 anos, tenho transformado essa paixão em uma profissão, dedicando-me a transformar sentimentos em imagens, criando memórias que você pode reviver para sempre.
            Minha missão é fazer com que cada foto conte uma história e transmita a essência de quem você é. Seja um sorriso sincero, um olhar contemplativo ou um gesto de carinho, estou aqui
            para registrar esses instantes preciosos com toda a sensibilidade que eles merecem.
            Vamos juntos eternizar os seus momentos mais especiais?
            </p>
        </div>
        </>
    )
}
export default About