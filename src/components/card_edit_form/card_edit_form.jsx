import React, { useRef, useState } from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } = card;
  const nameRef = useRef();

  const onTp = (event) => {
    const txt = event.currentTarget.value;
    console.log(txt);
  };
  return (
    <form className={styles.form}>
      <input ref={nameRef} name='name' onKeyPress={onTp} type='text' value={name} className={styles.input} />
      <input type='text' className={styles.input} />
      <select type='select' className={styles.select}>
        <option value='1'>1</option>
      </select>
      <input type='text' className={styles.input} />
      <input type='text' className={styles.input} />
      <textarea className={styles.textarea} name='' id='' cols='30' rows='10'></textarea>
      <div className={styles.fileInput}></div>
      <button name='edit'></button>
    </form>
  );
};

export default CardEditForm;
