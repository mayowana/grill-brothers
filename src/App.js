import React from 'react';
import Navbar from './components/Navbar/Navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import {Provider} from 'react-redux'
import store from './redux/store'
import MenuItems from './components/Menu/Menu'

library.add(faShoppingCart, faBars)

function App() {
  return (
    <>
    <Provider store={store}>
    <div>
      <Navbar></Navbar>
      <MenuItems />
    </div>
    </Provider>
    </>
  );
}

export default App;
