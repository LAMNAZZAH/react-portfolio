import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro.jsx';
import About from './components/about/About.jsx';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { useContext, useState } from 'react';
import { ThemeContext, ThemeProvider } from './context';

function App() {

const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{backgroundColor:darkMode ? "#222" : "white", color:darkMode && "white"}}>
      <Toggle />
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
