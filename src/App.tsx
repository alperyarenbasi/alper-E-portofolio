import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutTeaser from './components/AboutTeaser';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import WeakpointsPage from './pages/WeakpointsPage';
import EducationPage from './pages/EducationPage';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <AboutTeaser />
      <Skills />
      <FeaturedProjects />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/weakpoints" element={<WeakpointsPage />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App