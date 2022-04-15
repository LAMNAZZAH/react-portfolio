import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro.jsx';
import About from './components/about/About.jsx';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { useState } from 'react';
import { ThemeProvider } from './context';

function App() {
const [dark,setdark] = useState(false)
  return (
    <div className="App">
      <Toggle />
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
