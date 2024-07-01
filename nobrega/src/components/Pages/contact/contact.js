import styles from './contact.module.css'

function Contact(){
    return(
        <>
         <h1 className={styles.title}>Orçamento</h1>
         <p className={styles.text}>Para realizar um orçamento entre em contato através de minhas redes sociais ou preenchao formulario abaixo</p>
         <form action="send"></form>
        </>
    )
}
export default Contact