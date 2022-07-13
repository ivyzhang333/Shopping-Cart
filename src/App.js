

import Header from './component/Header';
import Main from './component/Main';
import Basket from './component/Basket';
import data from './data';
import { useState } from 'react';
import Product from './Product';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (Product) => {
    const exist = cartItems.find(x => x.id === products.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...products, qt: 1 }]);
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} cartItems={cartItems}></Basket>
      </div>
    </div>
  );
}

export default App;
