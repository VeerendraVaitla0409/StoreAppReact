
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Routing from './Components/Routing'
import { useState } from 'react';

function App() {

   // State to hold cart count
   const [cartCount, setCartCount] = useState(0);

   // Function to handle adding to the cart
   const handleAddToCart = () => {
     setCartCount(prevCount => prevCount + 1);
   };

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Routing handleAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;
