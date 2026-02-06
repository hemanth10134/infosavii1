import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Enterprise Resource Planning System',
      category: 'Enterprise Software',
      description: 'Developed a comprehensive ERP solution for a manufacturing company, integrating inventory management, supply chain operations, and financial accounting. Reduced operational costs by 35% and improved efficiency.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'AI-Powered Customer Analytics Platform',
      category: 'AI & Machine Learning',
      description: 'Built an intelligent analytics platform leveraging machine learning algorithms to predict customer behavior and provide actionable insights. Increased client retention by 40% and revenue by 28%.',
      tech: ['Python', 'TensorFlow', 'React', 'MongoDB'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Real-Time Fleet Management System',
      category: 'IoT & Cloud',
      description: 'Engineered a scalable IoT-based fleet management solution with real-time GPS tracking, route optimization, and predictive maintenance. Serving 500+ vehicles with 99.9% uptime.',
      tech: ['Angular', 'Firebase', 'Google Cloud', 'IoT'],
      gradient: 'from-green-500 to-teal-600',
    },
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4 backdrop-blur-sm">
            Case Studies
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore how we've helped businesses achieve their digital transformation goals through innovative technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-8">
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold rounded-full mb-4`}>
                  {project.category}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-cyan-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-4 transition-all duration-300">
                  <span>View Details</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="text-cyan-400" size={18} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
