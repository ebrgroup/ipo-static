import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Services from './screens/Services/Services';
import Projects from './screens/Projects/Projects';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/services' element={ <Services /> } />
      <Route path='/projects' element={ <Projects /> } />
    </Routes>
  );
}

export default App;
