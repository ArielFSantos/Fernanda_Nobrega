import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './contact.module.css';
import insta from '../../../image/insta.png';
import whats from '../../../image/whatsapp.png';

const Contact = () => {
  const initialValues = {
    nome: '',
    telefone: '',
    local: '',
    duracao: '',
    descricao: ''
  };

  const validationSchema = Yup.object({
    nome: Yup.string().required('Required'),
    telefone: Yup.string().required('Required'),
    local: Yup.string().required('Required'),
    duracao: Yup.number().required('Required').min(1, 'Duration must be at least 1 hour'),
    descricao: Yup.string().required('Required')
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Form data', values);
    // Simula uma requisição
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  return (
    <>
      <h1 className={styles.title}>Solicitar Orçamento</h1>
      <span className={styles.container}>
        <aside className={styles.socialmidias}>
          <p className={styles.text}>Para realizar um orçamento entre em contato através de minhas redes sociais ou preencha o formulário</p>
          <div className={styles.externalLinks}>
            <div className={styles.containerInsta}>
              <a href="https://www.instagram.com/nobrega.photograph/" target="_blank" rel="noreferrer">
                <img alt='contato Instagram' src={insta} className={styles.insta} />
              </a>
              <h2>@nobrega.photograph</h2>
            </div>
            <div className={styles.containerWhats}>
              <a href="https://wa.me/556292515025" target="_blank" rel="noreferrer">
                <img alt='contato whatsapp' src={whats} className={styles.whats} />
              </a>
              <h2>+55 62 99251-5025</h2>
            </div>
          </div>
        </aside>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formControl}>
                <label htmlFor="nome">Nome para contato:</label>
                <Field type="text" id="nome" name="nome" placeholder="Nome" />
                <ErrorMessage name="nome" component="div" className={styles.error} />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="telefone">Número para contato:</label>
                <Field type="tel" id="telefone" name="telefone" placeholder="Whatsapp" />
                <ErrorMessage name="telefone" component="div" className={styles.error} />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="local">Local do evento:</label>
                <Field type="text" id="local" name="local" placeholder="Bairro/Cidade" />
                <ErrorMessage name="local" component="div" className={styles.error} />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="duracao">Duração do Evento:</label>
                <Field type="number" id="duracao" name="duracao" placeholder="Horas" />
                <ErrorMessage name="duracao" component="div" className={styles.error} />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="descricao">Descrição:</label>
                <Field as="textarea" id="descricao" name="descricao" placeholder="Descreva aqui como será o evento" className={styles.description} />
                <ErrorMessage name="descricao" component="div" className={styles.error} />
              </div>
              <button type="submit" disabled={isSubmitting}>Enviar</button>
            </Form>
          )}
        </Formik>
      </span>
    </>
  );
};

export default Contact;
