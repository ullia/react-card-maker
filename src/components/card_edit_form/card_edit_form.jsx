import React, { useRef, useState } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } = card;
  const nameRef = useRef();

  const onTp = (event) => {
    const txt = event.currentTarget.value;
    console.log(txt);
    const onSubmit = () => {};
  };
  return (
    <form className={styles.form}>
      <input ref={nameRef} name='name' onKeyPress={onTp} type='text' value={name} className={styles.input} />
      <input name='company' type='text' value={company} className={styles.input} />
      <select name='theme' type='select' className={styles.select}>
        <option value='Light'>Light</option>
        <option value='Dark'>Dark</option>
        <option value='Coloful'>Coloful</option>
      </select>
      <input name='title' type='text' value={title} className={styles.input} />
      <input name='email' type='text' value={email} className={styles.input} />
      <textarea className={styles.textarea} name='message' id='' cols='30' rows='10'></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
        <Button name='Delete' onClick={onsubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
