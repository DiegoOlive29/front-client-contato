import React from 'react';
import { GlobalStyle } from './styles';
import './App.css';
import ModalCentral from './pages/ModalCentral';

function App() {
  return (
    <div className="App">
      <ModalCentral/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
