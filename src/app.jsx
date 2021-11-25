import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';

function App({ authService }) {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Login authService={authService} />} />
          <Route path='/maker' element={<Maker authService={authService} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
