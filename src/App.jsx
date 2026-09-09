import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <div className="landing-page">
            <div className="landing-content">
              <h1>🌿 Paradise Nursery</h1>
              <p>Where Green Meets Serenity</p>
              <button
                className="get-started-btn"
                onClick={() => setCurrentPage('products')}
              >
                Get Started
              </button>
            </div>
          </div>
        );
      case 'products':
        return <ProductList onNavigate={setCurrentPage} />;
      case 'cart':
        return <CartItem onNavigate={setCurrentPage} />;
      case 'about':
        return (
          <>
            <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
            <AboutUs />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Provider store={store}>
      <div className="App">
        {renderPage()}
      </div>
    </Provider>
  );
}

function Navbar({ currentPage, onNavigate }) {
  return null; // Navbar is rendered inside ProductList and CartItem
}

export default App;
