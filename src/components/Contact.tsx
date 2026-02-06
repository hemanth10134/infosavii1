import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4 backdrop-blur-sm">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="group p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400 mb-2">Our team is here to help</p>
                  <a href="mailto:contact@infosavi.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    contact@infosavi.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400 mb-2">Mon-Fri from 9am to 6pm IST</p>
                  <a href="tel:+918012345678" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +91 80 1234 5678
                  </a>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-400 mb-2">Come say hello at our office</p>
                  <address className="text-cyan-400 not-italic">
                    Koramangala, Bengaluru<br />
                    Karnataka 560034, India
                  </address>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-400">Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8">
                {isSubmitted && (
                  <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl rounded-2xl flex items-center justify-center z-10">
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                      <p className="text-gray-400">We'll get back to you soon.</p>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${
                        errors.name ? 'border-red-500' : 'border-cyan-500/20'
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-2 text-red-400 text-sm">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${
                        errors.email ? 'border-red-500' : 'border-cyan-500/20'
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-2 text-red-400 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${
                        errors.message ? 'border-red-500' : 'border-cyan-500/20'
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none`}
                      placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && <p className="mt-2 text-red-400 text-sm">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
