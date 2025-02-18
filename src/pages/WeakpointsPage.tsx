import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function WeakpointsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div ref={containerRef} className="min-h-[200vh] bg-[#f5f5f5] pt-16">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ opacity, scale }}
          className="text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div 
              animate={{ 
                boxShadow: ["0 0 0 rgba(239, 68, 68, 0)", "0 0 50px rgba(239, 68, 68, 0.5)", "0 0 0 rgba(239, 68, 68, 0)"],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block bg-red-50 rounded-xl p-12 mb-6"
            >
              <motion.h1 
                animate={{ 
                  textShadow: ["0 0 0 rgba(239, 68, 68, 0)", "0 0 10px rgba(239, 68, 68, 0.5)", "0 0 0 rgba(239, 68, 68, 0)"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-7xl font-mono text-red-500 mb-4 glitch"
              >
                ERROR 404
              </motion.h1>
              <p className="text-2xl text-red-400">No Weakpoints Found</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-500"
          >
            Scroll down to debug
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center"
        >
          <h2 className="text-3xl font-light mb-8">
            Just kidding, here are my <span className="font-bold">growth opportunities</span>
          </h2>
          
          <div className="grid gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">Perfectionism</h3>
              <p className="text-gray-600">
              Sometimes, I get caught up in the details, tweaking and refining until everything feels just right.  
              But hey, is striving for pixel-perfection really a weakness?
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">Caffeine Dependency</h3>
              <p className="text-gray-600">
                Whether it's coffee or an energy drink, caffeine fuels my days.  
                Still trying to find the perfect balance between productivity and over-caffeination. ☕⚡
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">Endless Curiosity</h3>
              <p className="text-gray-600">
                I have a habit of diving deep into topics that catch my interest—sometimes a little too deep.  
                One minute I'm researching something simple, the next I'm five tabs deep into computational fluid dynamics.  
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}