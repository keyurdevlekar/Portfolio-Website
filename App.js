import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const ResumeSection = lazy(() => import('./components/ResumeSection'));

function App() {
  return (
    <div className="portfolio-app">
      <Navigation />
      <Hero />
      
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <About />
        <Skills />
        <Projects />
        <ResumeSection /> {/* New Resume Section */}
        <Contact />
      </Suspense>
      
      <Footer />
    </div>
  );
}

export default App;