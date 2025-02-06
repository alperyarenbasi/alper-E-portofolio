import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-[#1a1a1a]">
            AY
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-[#007AFF]' : 'text-[#1a1a1a] hover:text-[#007AFF]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about' ? 'text-[#007AFF]' : 'text-[#1a1a1a] hover:text-[#007AFF]'
              }`}
            >
              About
            </Link>
            <Link 
              to="/education" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/education' ? 'text-[#007AFF]' : 'text-[#1a1a1a] hover:text-[#007AFF]'
              }`}
            >
              Education
            </Link>
            <Link 
              to="/projects" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/projects' ? 'text-[#007AFF]' : 'text-[#1a1a1a] hover:text-[#007AFF]'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/weakpoints" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/weakpoints' ? 'text-[#007AFF]' : 'text-[#1a1a1a] hover:text-[#007AFF]'
              }`}
            >
              Weakpoints
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}