import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h3 className={styles.title}>editor</h3>
      {cards.map((card) => (
        <CardEditForm card={card} />
      ))}
    </section>
  );
};

export default Editor;
