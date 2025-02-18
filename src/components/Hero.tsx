import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';


export default function Hero() {
  return (
    <div className="min-h-screen relative bg-[#f5f5f5] text-[#1a1a1a] pt-16">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-light mb-6">
            Future Engineer
              <span className="font-bold block mt-2">Alper Yarenbasi</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-600">
            <span className='italic'>MEng Cybernetics & Robotics student | BA Computer Science student</span>
              <br />
              {/* MBY TEXT HERE? */}
              </p>
            <div className="flex items-center space-x-6">
              <a href="/Alper Yarenbasi resume.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-[#1a1a1a] text-white rounded-full inline-flex items-center space-x-2 hover:bg-[#007AFF] transition-colors"
                >
                  Get My Resume
                </motion.button>
              </a>
              
              <motion.a
                href="https://github.com/alperyarenbasi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-[#1a1a1a] hover:text-[#007AFF] transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/alperyarenbasi/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-[#1a1a1a] hover:text-[#007AFF] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 rounded-3xl flex items-end justify-center overflow-hidden">
              <img
                src="/idun.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <motion.div
                //className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1a1a1a]/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-[#1a1a1a]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}