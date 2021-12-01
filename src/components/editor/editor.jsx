import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <h3 className={styles.title}>editor</h3>
      {cards.map((card) => (
        <CardEditForm card={card} />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
