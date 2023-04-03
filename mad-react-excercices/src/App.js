import {Link,Route,Routes} from 'react-router-dom';
import './App.css';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='ex1'>Exercise1 </Link>
        <Link to='ex2'> Exercise2 </Link>
        <Link to='ex3'> Exercise3 </Link>
        <Link to='ex4'> Exercise4 </Link>
        <Link to='about-us'> About Us </Link>
      </nav>
      <Exercise1 />
      <Routes>
        <Route path='/ex1' element={<Ex1/>} />
        <Route path='/ex2' element={<Ex2/>} />
        <Route path='/ex3' element={<Ex3/>} />
        <Route path='/ex4' element={<Ex4/>} />
        <Route path='/about-us' element={<AboutUs/>} />
      </Routes>
    </div>
  );
}

export default App;
