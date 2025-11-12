import React from 'react';
import Header from './components/Header';
import MenuList from './components/MenuList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MenuList />
      </main>
    </div>
  );
}

export default App;