import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import LoginPage from './pages/auth/LoginPage';

const pageVariantsMap = {
  '/': {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  },
  
  '/login': {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -60, transition: { duration: 0.3 } }
  },
  
};

function getPageVariant(pathname) {
  // Handle dynamic route for cafe details
  if (/^\/cafe\//.test(pathname)) return pageVariantsMap['/cafe/:id'];
  return pageVariantsMap[pathname] || pageVariantsMap['/'];
}

function AnimatedRoutes() {
  const location = useLocation();
  const variants = getPageVariant(location.pathname);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ minHeight: '100vh' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
         
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </HelmetProvider>
  );
};

export default App;
