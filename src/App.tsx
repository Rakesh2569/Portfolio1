import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, ChevronDown, Code, Server, Shield, Briefcase, GraduationCap, Award, Sparkles, Globe, Cpu } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 glass-card shadow-lg'
          : 'py-6 bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold gradient-text">SR.</span>
            <div className="flex items-center gap-8">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent dark:from-blue-950 dark:to-gray-900 -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-5 dark:opacity-10"></div>
        
        <div className="container mx-auto px-6 py-24 text-center relative">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <span
              className="w-32 h-32 rounded-full mx-auto shadow-2xl ring-4 ring-white dark:ring-gray-800 object-cover">  ...
              </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-gradient">
            Salapu Rakesh
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            <span className="font-semibold text-gray-800 dark:text-white">MERN Stack Developer</span> | 
            <span className="text-blue-600 dark:text-blue-400"> Frontend Specialist</span> | 
            <span className="text-purple-600 dark:text-purple-400"> AI & Cybersecurity Enthusiast</span>
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/Rakesh2569" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/salapurakesh/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="mailto:salapurakesh865@gmail.com" 
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://drive.google.com/file/d/1K-XWT-bi7HB-0bhZwpfUUU21csZMTX3s/view?usp=sharing"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-600/20 transition-all duration-300 font-medium"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
            >
              View Projects
            </a>
          </div>
          <a href="#about" className="animate-bounce-slow absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 text-center leading-relaxed">
              Hi, I'm Salapu Rakesh, a MERN Stack Developer with expertise in building interactive, responsive, and scalable web applications. I have experience in AI integration, cybersecurity, and optimizing web performance.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-8 rounded-2xl hover-card">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p className="font-medium">B.Tech in Computer Science Engineering</p>
                  <p>Avanthi Institute of Engineering And Technology</p>
                  <p className="text-blue-600 dark:text-blue-400">CGPA: 7.64</p>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl hover-card">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 mr-4">
                    <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
                    Cybersecurity
                  </li>
                  <li className="flex items-center">
                    <Cpu className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
                    Robotic Process Automation
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-8 rounded-2xl hover-card">
                <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frontend</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>• React.js</p>
                  <p>• TypeScript</p>
                  <p>• Tailwind CSS</p>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl hover-card">
                <Server className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Backend</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>• Node.js</p>
                  <p>• Express.js</p>
                  <p>• MongoDB</p>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl hover-card">
                <Sparkles className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Specialization</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>• AI Integration</p>
                  <p>• Cybersecurity</p>
                  <p>• Performance Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Flora",
                description: "An online plant shop with advanced features including real-time inventory, secure payments, and AR plant visualization.",
                image: "https://res.cloudinary.com/dy1txrjmy/image/upload/v1742842071/aqnubblwy1ieusfkgz80.png",
                tech: ["React.js", "Express.js", "Node.js","MongoDb"],
                icon: <Globe className="w-6 h-6" />,
                url : "https://e-flora.vercel.app/"
              },
              {
                title: "Social Media Learning",
                description: "A collaborative platform featuring real-time interactions, AI-powered content recommendations, and interactive learning tools.",
                image: "https://res.cloudinary.com/dy1txrjmy/image/upload/v1742842091/ndr5bdawkq0x1f9fw1mg.png",
                tech: ["MERN Stack", "AppWrite", "Tailwind"],
                icon: <Code className="w-6 h-6" />,
                url : "https://social-media-gold-iota.vercel.app/LandingPage"
              },
              {
                title: "Cezensoftwaresolutions",
                description: "Developed a landing page website for a textile client, ensuring a visually appealing and user-friendly design to enhance their online presence.",
                image: "https://res.cloudinary.com/dy1txrjmy/image/upload/v1742842106/da1mhlv64qk4cqeizmbq.png",
                tech: ["HTML", "CSS", "JavaScript"],
                icon: <Server className="w-6 h-6" />,
                url : "https://pravathysilkspalani.cezensoftwaresolutions.com/"
              },
              {
                title: "Cezensoftwaresolutions",
                description: "Developed a menu card website for a restaurent client, ensuring a visually appealing and user-friendly design to enhance their online presence.",
                image: "https://res.cloudinary.com/dy1txrjmy/image/upload/v1742842127/wygaqdodzcbbuzgrh2jb.png",
                tech: ["HTML", "CSS", "JavaScript"],
                icon: <Cpu className="w-6 h-6" />,
                url : "https://rajugariintivindu.cezensoftwaresolutions.com/"
              },
              {
                title: "CurrencyGaurd",
                description: "Comprehensive financial management system with blockchain integration and advanced security features.",
                image: "https://res.cloudinary.com/dy1txrjmy/image/upload/v1742842773/bxifq0ucr5adz2y07xrt.png",
                tech: ["React.js", "Python", "Tailwind CSS"],
                icon: <Shield className="w-6 h-6" />
              }
            ].map((project, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden hover-card">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="flex items-center text-white">
                      {project.icon}
                      <h3 className="text-xl font-semibold ml-2">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank" 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: "Freelance Frontend Developer",
                  company: "Cezaensoftware Solutions",
                  period: "Freelance",
                  description: "Led frontend development for multiple high-impact projects, specializing in responsive design and performance optimization.",
                  achievements: [
                    "Improved client website performance by 40%",
                    "Implemented advanced UI animations",
                    "Developed reusable component library"
                  ]
                },
                {
                  title: "Full-Stack Developer Trainee",
                  company: "NxtWave",
                  period: "2024 - Present",
                  description: "Intensive training in full-stack development with focus on modern web technologies and best practices.",
                  achievements: [
                    "Completed 20+ full-stack projects",
                    "Achieved top performer status",
                    "Mentored junior developers"
                  ]
                }
              ].map((experience, index) => (
                <div key={index} className="glass-card p-8 rounded-2xl hover-card">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                      <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400">{experience.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{experience.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 rounded-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-colors"
                      placeholder="Company@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-colors"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-600/20 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">Let's Connect</h3>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/Rakesh2569" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/salapurakesh/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:salapurakesh865@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} Salapu Rakesh. All rights reserved.</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </footer>
    </div>
  );
}

export default App;
