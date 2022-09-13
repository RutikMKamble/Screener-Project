import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hiring from './Pages/Hiring';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MainPage from './Pages/MainPage';
import { HealthIns } from './Pages/HealthIns';
import LifeIns from './Pages/LifeIns';
import BuyIns from './Pages/BuyIns';
import { HotLine } from './Pages/HotLine';
import BookCall from './Pages/BookCall';
import Whatsapp from './Pages/Whatsapp';
import Terms from './Pages/Terms';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='/hiring' element={<Hiring></Hiring>}></Route>
          <Route path='/healthIns' element={<HealthIns></HealthIns>} ></Route>
          <Route path='/lifeIns' element={<LifeIns></LifeIns>}></Route>
          <Route path='/buyIns' element={<BuyIns></BuyIns>}></Route>
          <Route path='/hotline' element={<HotLine></HotLine>} ></Route>
          <Route path='/bookCall' element={<BookCall></BookCall>} ></Route>
          <Route path='/whatsAppUs' element={<Whatsapp></Whatsapp>} ></Route>
          <Route path='/terms' element={<Terms></Terms>} ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
