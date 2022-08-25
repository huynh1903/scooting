import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import About from './components/About/About';
import Location from './components/Location/Location';
import Careers from './components/Careers/Careers';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/location' element={ <Location />}/>
        <Route path='/careers' element={ <Careers />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
