import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';
import { Project } from '../types';

const octokit = new Octokit();

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        // Replace with your GitHub username
        const response = await octokit.repos.listForUser({
          username: 'alperyarenbasi',
          sort: 'updated',
          per_page: 6
        });

        const githubProjects = response.data.map(repo => ({
          id: repo.id.toString(),
          name: repo.name,
          description: repo.description || '',
          technologies: repo.topics || [],
          githubUrl: repo.html_url,
          featured: false
        }));

        setProjects(githubProjects);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center "
        >
          Featured Projects
        </motion.h2>

        {loading ? (
          <div className="text-center">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-800 text-center hover:bg-gray-700 transition-colors"
                  >
                    View on GitHub
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}