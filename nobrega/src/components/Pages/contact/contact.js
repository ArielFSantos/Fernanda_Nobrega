import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './contact.module.css';
import insta from '../../../image/insta.png';
import whats from '../../../image/whatsapp.png';

const ContactSchema = Yup.object().shape({
    nome: Yup.string().required('Nome obrigatório'),
    telefone: Yup.string().required('Número de telefone obrigatório'),
    local: Yup.string().required('Local do evento obrigatório'),
    duracao: Yup.number().required('Duração do evento obrigatória').positive().integer(),
    descricao: Yup.string().required('Descrição obrigatória')
});

function Contact() {
    return (
        <>   
            <div className={styles.bgMain}>
                <h1 className={styles.title}>Solicitar Orçamento</h1>
                <span className={styles.container}>
                    <aside className={styles.socialmidias}>
                        <p className={styles.text}>
                            Para realizar um orçamento entre em contato através de minhas redes sociais ou preencha o formulário
                        </p>
                        <div className={styles.externalLinks}>
                                <a href="https://www.instagram.com/nobrega.photograph/" className={styles.containerInsta} target="_blank" rel="noreferrer">
                                    <img alt='contato Instagram' src={insta} className={styles.insta}></img>
                                    <h2>@nobrega.photograph</h2>
                                </a>
                                <a href="https://wa.me/556292515025" className={styles.containerWhats} target="_blank" rel="noreferrer">
                                    <img alt='contato whatsapp' src={whats} className={styles.whats}></img>
                                    <h2>+55 62 99251-5025</h2>
                                </a>
                        </div>
                    </aside>
                    <Formik
                        initialValues={{
                            nome: '',
                            telefone: '',
                            local: '',
                            duracao: '',
                            descricao: ''
                        }}
                        validationSchema={ContactSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            fetch('https://formspree.io/f/xdknodzg', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(values)
                            })
                            .then(response => {
                                if (response.ok) {
                                    alert('Formulário enviado com sucesso!');
                                } else {
                                    alert('Ocorreu um erro. Tente novamente.');
                                }
                                setSubmitting(false);
                            })
                            .catch(error => {
                                alert('Ocorreu um erro. Tente novamente.');
                                setSubmitting(false);
                            });
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className={styles.form}>
                                <label htmlFor="nome">Nome para contato:</label>
                                <Field type="text" id="nome" name="nome" placeholder="Nome" />
                                <ErrorMessage name="nome" component="div" className={styles.error} />
                
                                <label htmlFor="telefone">Número para contato:</label>
                                <Field type="tel" id="telefone" name="telefone" placeholder="Whatsapp" />
                                <ErrorMessage name="telefone" component="div" className={styles.error} />
                
                                <label htmlFor="local">Local do evento:</label>
                                <Field type="text" id="local" name="local" placeholder="Bairro/Cidade" />
                                <ErrorMessage name="local" component="div" className={styles.error} />
                
                                <label htmlFor="duracao">Duração do Evento:</label>
                                <Field type="number" id="duracao" name="duracao" placeholder="Horas" />
                                <ErrorMessage name="duracao" component="div" className={styles.error} />
                
                                <label htmlFor="descricao">Descrição:</label>
                                <Field className={styles.description} as="textarea" id="descricao" name="descricao" placeholder="Descreva aqui como será o evento" />
                                <ErrorMessage name="descricao" component="div" className={styles.error} />
                
                                <button type="submit" disabled={isSubmitting}>Enviar</button>
                            </Form>
                        )}
                    </Formik>
                </span>
            </div>
        </>
    );
}

export default Contact;
