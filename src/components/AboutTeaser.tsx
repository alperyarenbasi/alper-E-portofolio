import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-light mb-8">
            Who Am <span className="font-bold">I?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            I'm a passionate engineer-in-training, exploring the fascinating intersection of robotics, 
            cybernetics, and computer science. My journey spans across three universities, 
            where I'm constantly pushing the boundaries of what's possible in automation and AI.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Link
              to="/about"
              className="group inline-flex items-center space-x-2 text-lg font-medium text-[#007AFF] hover:text-[#1a1a1a] transition-colors"
            >
              <span>Get to know me better</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}