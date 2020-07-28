import React from 'react';
import Logo from './components/LogPrime/index.js'
import HeaderPrime from './components/HeaderPrime/index';
import ButtonPrime from './components/ButtonPrime/index.js';

function App() {
  return (
    <>
      <HeaderPrime>
        <Logo />
        <ButtonPrime>Novo Video</ButtonPrime>
      </HeaderPrime>

    </>
  );
}

export default App;
