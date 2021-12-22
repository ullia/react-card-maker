import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';

function App({ FileInput, authService, cardRepository }) {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Login authService={authService} />} />
          <Route
            path='/maker'
            element={
              <Maker
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
