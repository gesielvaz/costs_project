import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container.Module.css';

function App() {
  return (
    <Router>
      <div>
        <Link to="/"> Home </Link>
        <Link to = "/company"> Empresas </Link>
        <Link to = "/contact"> Contato </Link>
        <Link to = "/newproject"> Novo Projeto </Link>
      </div>
      <div className={`min-height ${Container.customClass}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </div>
      <p>Footer</p>
    </Router>
  );
}

export default App;
