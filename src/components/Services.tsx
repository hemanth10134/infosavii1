import { Code, Cloud, Cpu, BarChart3, Smartphone, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs using modern tech stacks and agile methodologies.',
      gradient: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/20 hover:border-cyan-500/50',
      shadowColor: 'hover:shadow-cyan-500/20',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Seamless cloud migration, infrastructure automation, and CI/CD pipeline implementation for optimal efficiency.',
      gradient: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-500/20 hover:border-blue-500/50',
      shadowColor: 'hover:shadow-blue-500/20',
    },
    {
      icon: Cpu,
      title: 'AI Automation',
      description: 'Intelligent automation solutions leveraging machine learning and AI to streamline your business processes.',
      gradient: 'from-purple-500 to-pink-600',
      borderColor: 'border-purple-500/20 hover:border-purple-500/50',
      shadowColor: 'hover:shadow-purple-500/20',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence.',
      gradient: 'from-green-500 to-teal-600',
      borderColor: 'border-green-500/20 hover:border-green-500/50',
      shadowColor: 'hover:shadow-green-500/20',
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Apps',
      description: 'Responsive web applications and native mobile apps that deliver exceptional user experiences across all devices.',
      gradient: 'from-orange-500 to-red-600',
      borderColor: 'border-orange-500/20 hover:border-orange-500/50',
      shadowColor: 'hover:shadow-orange-500/20',
    },
    {
      icon: Lightbulb,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to align your IT infrastructure with business goals and drive digital transformation.',
      gradient: 'from-yellow-500 to-orange-600',
      borderColor: 'border-yellow-500/20 hover:border-yellow-500/50',
      shadowColor: 'hover:shadow-yellow-500/20',
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDYsIDE4MiwgMjEyLCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4 backdrop-blur-sm">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology services that empower your business to thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border ${service.borderColor} rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${service.shadowColor}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <service.icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                <div className="mt-6 flex items-center text-cyan-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
