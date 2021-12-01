import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
  const [userId, setUserId] = useState(0);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const addCard = (card) => {
    console.log(card);
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
