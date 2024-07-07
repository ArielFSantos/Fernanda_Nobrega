import styles from './contact.module.css'
import insta from '../../../image/insta.png'
import whats from '../../../image/whatsapp.png'

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
                            <img alt='contato Instagram' src={insta} className={styles.insta}></img>
                            </a>
                            <h2>@nobrega.photograph</h2>
                        </div>
                        <div className={styles.containerWhats}>
                            <a href="https://wa.me/556292515025" target="_blank" rel="noreferrer">
                            <img alt='contato whatsapp' src={whats} className={styles.whats}></img>
                            </a>
                            <h2>+55 62 99251-5025</h2>
                        </div>
                    </div>
                </aside>
                <form action="https://formspree.io/f/xdknodzg" method="POST">
                    <label for="nome">Nome para contato:</label>
                    <input type="text" id="nome" name="nome" placeholder="Nome"/>
                    <label for="telefone">Número para contato:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="Whatsapp"/>
                    <label for="local">Local do evento:</label>
                    <input type="text" id="local" name="local" placeholder="Bairro/Cidade"/>
                    <label for="duracao">Duração do Evento:</label>
                    <input type="number" id="duracao" name="duracao" placeholder="Horas"/>
                    <label for="descricao">Descrição:</label>
                    <input className={styles.description} type="text" id="descricao" name="descricao" placeholder="Descreva aqui como será o evento"/>
                    <button type="submit">Enviar</button>
                </form>
            </span>
        
        </>
    )
}
export default Contact