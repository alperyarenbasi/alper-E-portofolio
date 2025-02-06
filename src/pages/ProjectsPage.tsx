import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';
import { Project } from '../types';

const octokit = new Octokit();

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await octokit.repos.listForUser({
          username: 'alperyarenbasi',
          sort: 'updated',
          per_page: 100
        });

        const githubProjects = response.data.map(repo => ({
          id: repo.id.toString(),
          name: repo.name,
          description: repo.description || 'No description available',
          technologies: repo.topics || [],
          githubUrl: repo.html_url,
          featured: false,
          language: repo.language,
          stars: repo.stargazers_count,
          updatedAt: new Date(repo.updated_at)
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
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light mb-16 text-center"
        >
          All <span className="font-bold">Projects</span>
        </motion.h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007AFF]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">{project.name}</h2>
                  {project.language && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {project.language}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
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
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007AFF] hover:underline"
                  >
                    View Project →
                  </a>
                  {project.stars > 0 && (
                    <span className="text-gray-600 text-sm">
                      ★ {project.stars}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}