import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';

const Card_add_form = () => {
  return (
    <form className={styles.form}>
      <input type='text' className={styles.input} />
      <input type='text' className={styles.input} />
      <select type='select' className={styles.select}>
        <option value='1'>1</option>
      </select>
      <input type='text' className={styles.input} />
      <input type='text' className={styles.input} />
      <textarea className={styles.textarea} name='' id='' cols='30' rows='10'></textarea>
      <div className={styles.fileInput}></div>
      <button name='Add'></button>
    </form>
  );
};

export default Card_add_form;
