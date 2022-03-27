import React,{ useState} from 'react';
import {Browser as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import Categories from './components/categories/Categories';
import items from './components/data/Data';
import Home from './pages/Home';
import About from './pages/About';
import SingleProduct from './pages/SingleProduct';



const allCategories = ['all',...new Set(items.map((item)=> item.category))] 
console.log(allCategories);


function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all'){
        setMenuItems(items);
        return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }; 

  return (
    <div className="App">
      <section className="menu section">
        <h2>our menu </h2>
        <div className="underline">

        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu  items={menuItems} />

      </section>
    </div>
  );
}

export default App;
