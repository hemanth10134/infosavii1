import { Target, Eye, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-cyan-500/50">
                    <Rocket className="text-white" size={64} />
                  </div>
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-white font-semibold text-xl">Years of Excellence</div>
                  <div className="text-gray-400 mt-2">Innovation & Growth</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-xl px-4 py-2">
                <div className="text-cyan-400 font-semibold text-sm">Bengaluru, India</div>
              </div>

              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-xl px-6 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full border-2 border-slate-900"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-slate-900"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full border-2 border-slate-900"></div>
                  </div>
                  <div className="text-white font-semibold text-sm">20+ Expert Team</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
              About InfoSavi
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Driving Digital Transformation Since 2019
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              InfoSavi is a leading IT services company based in Bengaluru, specializing in innovative software solutions and digital transformation strategies. We empower businesses to leverage cutting-edge technology for sustainable growth and competitive advantage.
            </p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              With a team of experienced developers, architects, and consultants, we deliver end-to-end technology solutions across web development, mobile apps, cloud infrastructure, AI automation, and enterprise software development.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-gray-400">
                  To deliver innovative, scalable, and secure technology solutions that transform businesses and drive measurable results.
                </p>
              </div>

              <div className="group p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-gray-400">
                  To be the most trusted technology partner for enterprises seeking digital excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
