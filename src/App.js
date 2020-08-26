import React from 'react';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faBars)

function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
