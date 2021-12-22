import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName } = card;
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        name='name'
        type='text'
        value={name}
        className={styles.input}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        name='company'
        type='text'
        value={company}
        className={styles.input}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        name='theme'
        type='select'
        value={theme}
        className={styles.select}
        onChange={onChange}
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='coloful'>coloful</option>
      </select>
      <input
        ref={titleRef}
        name='title'
        type='text'
        value={title}
        className={styles.input}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        name='email'
        type='text'
        value={email}
        className={styles.input}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        id=''
        value={message}
        cols='30'
        rows='10'
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
        <Button name='Delete' onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
