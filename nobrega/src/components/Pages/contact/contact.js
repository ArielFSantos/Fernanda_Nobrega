import styles from './contact.module.css'

function Contact(){
    return(
        <>   
        <h1 className={styles.title}>Orçamento</h1>
        <span className={styles.container} >
            <p className={styles.text}>Para realizar um orçamento entre em contato através de minhas redes sociais ou preencha o formulario</p>
            <form action="send" className={styles.formulario}>
                <h2>Nome para contato:</h2>
                <input type="text" placeholder='Nome'/>
                <h2>Numero para contato:</h2>
                <input type="number" placeholder='Whatsapp'/>
                <h2>Local do evento:</h2>
                <input type="text" placeholder='Bairro/Cidade'/>
                <h2>Duração do Evento:</h2>
                <input type="number" placeholder='Horas'/>
                <h2>Descreva o Evento:</h2>
                <input className={styles.description} type="text" placeholder='Descrição' />
            </form>
        </span>
        </>
    )
}
export default Contact