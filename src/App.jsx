import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectGallery from './components/ProjectGallery';
import ProjectDetail from './components/ProjectDetail';

// Wrapper component for the Home page to include all sections
const Home = () => (
  <>
    <Hero />
    <Projects />
    <Contact />
  </>
);

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="layout-container">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectGallery />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
