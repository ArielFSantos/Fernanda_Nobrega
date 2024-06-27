import styles from './about.module.css'

function About (){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.about}/>
            <h1 className={styles.title}>Hi, I am Fernanda Nóbrega, nice to meet you!</h1>
            <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis doloremque officiis assumenda eveniet pariatur quae exercitationem
                dolore neque voluptate! Non iste est aliquid ut in, eaque aliquam quisquam dolores tenetur?
            </p>
        </div>
        </>
    )
}
export default About