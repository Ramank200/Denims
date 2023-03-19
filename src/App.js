import logo from './logo.svg';
import './App.css';
import Homepage from './Presentation/Pages/Homepage/Homepage';
import History from './Presentation/Pages/History/History';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Presentation/Components/Navbar/Navbar';
import Men from './Presentation/Pages/Mens/Men';
import Contact from './Presentation/Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/history"} element={<History />} />
          <Route path={"/fashion"} element={<Men />} />
          <Route path={'/contact'} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
