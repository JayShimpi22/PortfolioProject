import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
