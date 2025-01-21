import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Smartphone, Code, Database, PenTool, Download, Briefcase, GraduationCap, Activity, Award, Users, Globe } from 'lucide-react';

interface VisibilityState {
  [key: string]: boolean;
}

function App() {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [scrollY, setScrollY] = useState<number>(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const subtitles = [
    "Crafting Beautiful Mobile Experiences",
    "Building Scalable Android Solutions",
    "Creating Engaging User Interfaces",
    "Transforming Ideas into Apps"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const animateClass = (id: string): string => 
    isVisible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Enhanced with Parallax and Animated Subtitle */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 transform scale-105"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4 transform transition-all duration-1000 translate-y-0">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-fade-in">
            Android Engineer
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-8 h-12 transition-all duration-500 ease-in-out">
            {subtitles[subtitleIndex]}
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-white hover:text-blue-400 transition-all transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-all transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-all transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
            View My Work
          </button>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section - With Animated Stats */}
      <section className="py-20 px-4 md:px-8" id="about">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              id="about-image"
              data-animate
              className={`rounded-lg overflow-hidden shadow-2xl transform transition-all duration-1000 ${animateClass('about-image')}`}
            >
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
                alt="Working on code"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div 
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${animateClass('about-content')}`}
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                I'm a passionate Android Engineer with extensive experience in developing robust and user-friendly mobile applications. 
                With a strong foundation in Kotlin and Java, I specialize in creating scalable solutions that deliver exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
                  <p className="text-gray-600">Apps Developed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Resume</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div 
              id="experience"
              data-animate
              className={`transition-all duration-1000 ${animateClass('experience')}`}
            >
              <div className="flex items-center mb-8">
                <Briefcase size={24} className="text-blue-400 mr-4" />
                <h3 className="text-3xl font-bold">Experience</h3>
              </div>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-xl font-bold text-blue-400">Senior Android Engineer</h4>
                  <p className="text-gray-400">Google • 2020 - Present</p>
                  <p className="mt-2 text-gray-300">Led development of multiple flagship Android applications with millions of users.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-xl font-bold text-blue-400">Android Developer</h4>
                  <p className="text-gray-400">Facebook • 2018 - 2020</p>
                  <p className="mt-2 text-gray-300">Developed and maintained core features of the Facebook Android app.</p>
                </div>
              </div>
            </div>
            {/* Education */}
            <div 
              id="education"
              data-animate
              className={`transition-all duration-1000 ${animateClass('education')}`}
            >
              <div className="flex items-center mb-8">
                <GraduationCap size={24} className="text-purple-400 mr-4" />
                <h3 className="text-3xl font-bold">Education</h3>
              </div>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-purple-400">
                  <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-xl font-bold text-purple-400">Master's in Computer Science</h4>
                  <p className="text-gray-400">Stanford University • 2016 - 2018</p>
                  <p className="mt-2 text-gray-300">Specialized in Mobile Computing and Distributed Systems</p>
                </div>
                <div className="relative pl-8 border-l-2 border-purple-400">
                  <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-xl font-bold text-purple-400">Bachelor's in Software Engineering</h4>
                  <p className="text-gray-400">MIT • 2012 - 2016</p>
                  <p className="mt-2 text-gray-300">Graduated with Honors, Dean's List</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <Download size={20} className="mr-2" />
              Download Full Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="text-blue-600" size={24} />,
                title: "Android Development",
                color: "blue",
                skills: ["Kotlin & Java", "MVVM Architecture", "Jetpack Compose", "Material Design"]
              },
              {
                icon: <Code className="text-green-600" size={24} />,
                title: "Development Tools",
                color: "green",
                skills: ["Android Studio", "Git & GitHub", "CI/CD", "Firebase"]
              },
              {
                icon: <Database className="text-purple-600" size={24} />,
                title: "Backend Integration",
                color: "purple",
                skills: ["RESTful APIs", "GraphQL", "SQLite", "Room Database"]
              }
            ].map((category, index) => (
              <div
                key={index}
                id={`skill-${index}`}
                data-animate
                className={`bg-white p-8 rounded-xl shadow-xl transform transition-all duration-1000 hover:-translate-y-2 ${animateClass(`skill-${index}`)}`}
              >
                <div className={`w-16 h-16 bg-${category.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-${category.color}-500 mr-3`}></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                id={`project-${project}`}
                data-animate
                className={`group bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-1000 hover:shadow-2xl ${animateClass(`project-${project}`)}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1024"
                    alt={`Project ${project}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">Project Name {project}</h3>
                      <p className="mt-2">View Details →</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and its key features. Highlighting the technologies used and the problems solved.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Kotlin</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">MVVM</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Firebase</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Activity className="text-blue-500" size={32} />,
                title: "Open Source",
                count: "15+",
                description: "Active Contributions",
                color: "blue"
              },
              {
                icon: <Award className="text-purple-500" size={32} />,
                title: "Awards",
                count: "12",
                description: "Recognition Received",
                color: "purple"
              },
              {
                icon: <Users className="text-green-500" size={32} />,
                title: "Mentoring",
                count: "50+",
                description: "Developers Guided",
                color: "green"
              },
              {
                icon: <Globe className="text-indigo-500" size={32} />,
                title: "Speaking",
                count: "25+",
                description: "Tech Conferences",
                color: "indigo"
              }
            ].map((activity, index) => (
              <div
                key={index}
                id={`activity-${index}`}
                data-animate
                className={`bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${animateClass(`activity-${index}`)}`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className={`w-16 h-16 bg-${activity.color}-100 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300`}>
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {activity.count}
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>

          {/* Activity Timeline */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Recent Activities</h3>
            <div className="space-y-8">
              {[
                {
                  date: "December 2023",
                  title: "Android Dev Summit Speaker",
                  description: "Presented advanced Android development techniques to over 500 developers"
                },
                {
                  date: "October 2023",
                  title: "Open Source Milestone",
                  description: "Major contribution to JetPack Compose accepted by Google"
                },
                {
                  date: "September 2023",
                  title: "Tech Mentorship Program",
                  description: "Launched mentorship program for aspiring Android developers"
                }
              ].map((event, index) => (
                <div
                  key={index}
                  id={`timeline-${index}`}
                  data-animate
                  className={`relative pl-8 border-l-2 border-blue-400 ${animateClass(`timeline-${index}`)}`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0 transform hover:scale-150 transition-transform duration-300"></div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-sm text-blue-500 font-semibold">{event.date}</span>
                    <h4 className="text-xl font-bold mt-2">{event.title}</h4>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-2xl text-gray-300 mb-12">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="flex items-center space-x-3 px-6 py-4 bg-white/10 rounded-xl backdrop-blur-lg hover:bg-white/20 transition-all transform hover:scale-105">
              <Mail size={24} />
              <span className="text-lg">Email Me</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-6 py-4 bg-white/10 rounded-xl backdrop-blur-lg hover:bg-white/20 transition-all transform hover:scale-105">
              <Phone size={24} />
              <span className="text-lg">Call Me</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-6 py-4 bg-white/10 rounded-xl backdrop-blur-lg hover:bg-white/20 transition-all transform hover:scale-105">
              <Linkedin size={24} />
              <span className="text-lg">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-gray-400">
        <p className="text-lg">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;