import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CTO, TechVision Industries',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'InfoSavi transformed our legacy systems into a modern, cloud-based infrastructure. Their team\'s expertise in DevOps and cloud architecture is exceptional. We saw a 40% reduction in operational costs within the first six months.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'CEO, RetailHub Solutions',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with InfoSavi on our e-commerce platform was a game-changer. Their attention to detail, proactive communication, and ability to deliver on tight deadlines exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Arjun Patel',
      role: 'Founder, FinanceFirst',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The AI-powered analytics solution developed by InfoSavi has revolutionized how we understand our customers. The insights we gain have directly contributed to a 35% increase in customer retention. Outstanding work!',
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-cyan-500/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4 backdrop-blur-sm">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with InfoSavi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="mb-6">
                  <Quote className="text-cyan-400/20 w-12 h-12 mb-4" />
                  <p className="text-gray-300 leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-cyan-500/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-8 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">4.9/5</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
