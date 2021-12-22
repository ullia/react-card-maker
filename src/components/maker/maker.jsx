import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'ullia',
      company: 'Santel',
      theme: 'dark',
      title: 'FrontEnd Developer',
      email: 'ullia21@santelglobal.com',
      message: 'Hi, everyone!',
      fileName: '',
      fileURL: '/images/default_logo.png',
    },
    2: {
      id: '2',
      name: 'ullia2',
      company: 'Santel',
      theme: 'light',
      title: 'FrontEnd Developer',
      email: 'ullia21@santelglobal.com',
      message: 'Hi, everyone!',
      fileName: '',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'ullia3',
      company: 'Santel',
      theme: 'colorful',
      title: 'FrontEnd Developer',
      email: 'ullia21@santelglobal.com',
      message: 'Hi, everyone!',
      fileName: '',
      fileURL: null,
    },
  });
  const [userId, setUserId] = useState(0);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const addCard = card => {
    console.log(card);
    const updated = [...cards, card];
    setCards(updated);
  };

  const createOrUpdateCard = card => {
    console.log(card);

    setCards(cards => {
      console.log(cards);
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
