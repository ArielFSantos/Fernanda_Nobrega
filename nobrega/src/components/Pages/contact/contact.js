import styles from './contact.module.css'

function Contact(){
    return(
        <>   
        <h1 className={styles.title}>Orçamento</h1>
        <span className={styles.container} >
            <aside className={styles.socialmidias}>
                <p className={styles.text}>Para realizar um orçamento entre em contato através de minhas redes sociais ou preencha o formulario</p>
                <div className={styles.externalLinks}>
                    <div className={styles.containerInsta}>
                        <a href="https://www.instagram.com/nobrega.photograph/" target="_blank" rel="noreferrer">
                        <img alt='contato Instagram' className={styles.insta}></img>
                        </a>
                        <h2>@nobrega.photograph</h2>
                    </div>
                    <div className={styles.containerWhats}>
                        <a href="/" target="_blank" rel="noreferrer">
                        <img alt='contato whatsapp' className={styles.whats}></img>
                        </a>
                        <h2>+55 62 99251-5025</h2>
                    </div>
                </div>               
            </aside>
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
                <button className={styles.button} type='submit'>Enviar</button>
            </form>
        </span>
        </>
    )
}
export default Contact