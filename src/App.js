import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import AboutMe from './pages/about/AboutMe';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Themes from './components/Themes/Themes.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes > 
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='aboutMe' element={<AboutMe />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='contact' element={<Contact />}/>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
