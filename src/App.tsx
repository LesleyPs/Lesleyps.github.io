import { ReactNode, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CrackleCaseStudy from './pages/CrackleCaseStudy';
import DonkeyDonkeyCaseStudy from './pages/DonkeyDonkeyCaseStudy';
import TikiCaseStudy from './pages/TikiCaseStudy';
import MyLifeCaseStudy from './pages/MyLifeCaseStudy';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-cream selection:bg-blue/10 selection:text-blue">
        <Cursor />
        <div className="page-container">
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <PageWrapper>
                      <Home />
                    </PageWrapper>
                  } 
                />
                <Route 
                  path="/about" 
                  element={
                    <PageWrapper>
                      <About />
                    </PageWrapper>
                  } 
                />
                <Route 
                  path="/projects" 
                  element={
                    <PageWrapper>
                      <Projects />
                    </PageWrapper>
                  } 
                />
                <Route 
                  path="/projects/crackle" 
                  element={
                    <PageWrapper>
                      <CrackleCaseStudy />
                    </PageWrapper>
                  } 
                />
                <Route 
                  path="/projects/donkey" 
                  element={
                    <PageWrapper>
                      <DonkeyDonkeyCaseStudy />
                    </PageWrapper>
                  } 
                />
                <Route 
                  path="/projects/tiki" 
                  element={
                    <PageWrapper>
                      <TikiCaseStudy />
                    </PageWrapper>
                  } 
                />
                <Route 
                  path="/projects/mylife" 
                  element={
                    <PageWrapper>
                      <MyLifeCaseStudy />
                    </PageWrapper>
                  } 
                />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

