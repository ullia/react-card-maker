import React, { memo, useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onTp = event => {
    const txt = event.currentTarget.value;
    console.log(txt);
  };

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const card = {
      id: Date.now(), // uuid
      name: nameRef.current.value,
      company: companyRef.current.value,
      theme: themeRef.current.value,
      title: titleRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      fileName: file.fileName,
      fileURL: file.fileURL,
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        name='name'
        onKeyPress={onTp}
        type='text'
        placeholder='Name'
      />
      <input
        ref={companyRef}
        className={styles.input}
        name='company'
        type='text'
        placeholder='Company'
      />
      <select
        ref={themeRef}
        className={styles.select}
        name='theme'
        type='select'
        placeholder='Theme'
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} name='title' type='text' placeholder='title' />
      <input ref={emailRef} className={styles.input} name='email' type='text' placeholder='email' />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        id=''
        placeholder='Enter your message'
        cols='30'
        rows='10'
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
        <Button name='Add' onClick={onSubmit} />
      </div>
    </form>
  );
};

export default memo(CardAddForm);
