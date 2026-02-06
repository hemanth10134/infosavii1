import { Shield, Zap, Users, Award, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security protocols and compliance standards to protect your sensitive business data.',
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Delivery',
      description: 'Agile development methodology ensures rapid deployment without compromising on quality.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled developers, architects, and consultants with deep industry expertise.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successfully delivered 50+ projects across diverse industries with 99% client satisfaction.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance to ensure your systems run smoothly.',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We combine technical excellence with strategic thinking to deliver solutions that drive real business value and competitive advantage.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-6 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:bg-slate-900/70 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-cyan-400" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                      50+
                    </div>
                    <div>
                      <div className="text-white font-semibold">Projects Completed</div>
                      <div className="text-gray-400 text-sm">Across multiple domains</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                      99%
                    </div>
                    <div>
                      <div className="text-white font-semibold">Client Satisfaction</div>
                      <div className="text-gray-400 text-sm">Exceptional service quality</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                      24/7
                    </div>
                    <div>
                      <div className="text-white font-semibold">Always Available</div>
                      <div className="text-gray-400 text-sm">Round-the-clock support</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">5+</div>
                      <div className="text-gray-400 text-sm">Years Experience</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">20+</div>
                      <div className="text-gray-400 text-sm">Team Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
