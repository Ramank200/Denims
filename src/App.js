import logo from './logo.svg';
import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Presentation/Pages/Homepage/Homepage';
import History from './Presentation/Pages/History/History';
import Navbar from './Presentation/Components/Navbar/Navbar';
import Men from './Presentation/Pages/Mens/Men';
import Contact from './Presentation/Pages/Contact/Contact';
import Products from './Presentation/Pages/Products/Products';
import Cart from './Presentation/Pages/AddToCart/Cart';

function App() {
  return (
    <div className="App">
      <RecoilRoot>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/history"} element={<History />} />
          <Route path={"/fashion"} element={<Men />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/products'} element={<Products/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
