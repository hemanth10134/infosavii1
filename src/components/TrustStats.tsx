import { Award, Users, TrendingUp, MapPin } from 'lucide-react';

export default function TrustStats() {
  const stats = [
    {
      icon: Award,
      value: '50+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects',
    },
    {
      icon: Users,
      value: '20+',
      label: 'Happy Clients',
      description: 'Across multiple industries',
    },
    {
      icon: TrendingUp,
      value: '99%',
      label: 'Client Satisfaction',
      description: 'Based on client feedback',
    },
    {
      icon: MapPin,
      value: 'Bengaluru',
      label: 'Based',
      description: 'Serving clients globally',
    },
  ];

  return (
    <section className="relative py-20 bg-slate-950 border-y border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-cyan-400" size={24} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
