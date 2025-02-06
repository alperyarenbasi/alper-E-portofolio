import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types';

const featuredProjects: Project[] = [
  {
    id: '1',
    name: 'Autonomous Robot Navigation',
    description: 'ROS-based navigation system using SLAM and path planning algorithms.',
    technologies: ['ROS', 'Python', 'C++', 'Computer Vision'],
    githubUrl: 'https://github.com/alperyarenbasi/robot-nav',
    featured: true,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Machine Learning Pipeline',
    description: 'End-to-end ML pipeline for real-time data processing and prediction.',
    technologies: ['Python', 'TensorFlow', 'Docker'],
    githubUrl: 'https://github.com/alperyarenbasi/ml-pipeline',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80'
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-light mb-16 text-center"
        >
          Featured <span className="font-bold">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#007AFF] hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-3 bg-[#1a1a1a] text-white rounded-full hover:bg-[#007AFF] transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}