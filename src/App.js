import logo from './logo.svg';
import './App.css';
import Homepage from './Presentation/Pages/Homepage/Homepage';
import History from './Presentation/Pages/History/History';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Presentation/Components/Navbar/Navbar';
import Men from './Presentation/Pages/Mens/Men';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/history"} element={<History />} />
          <Route path={"/men"} element={<Men />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
