import { useState } from 'react';
import { items } from './data';
import './App.css';
import Categories from './components/Categories';
import Menu from './components/Menu';

// collect the list from menu data
const categoryList = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenu] = useState(items);
  const [category, setCategory] = useState([categoryList]);
  // on any category click, filter the list
  const filterItems = (category) => {
    if(category === 'all'){
      setMenu(items);
      return;
    }
    const filteredItems = items.filter((item) => 
      item.category === category);
    setMenu(filteredItems);
  };
 
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categoryList={categoryList}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
