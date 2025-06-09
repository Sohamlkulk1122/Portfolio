import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [
    "Soham Kulkarni",
    "Front-End Developer",
    "Data Analyst",
    "Prompt Engineer",
    "Ethical Hacking Expert"
  ];

  useEffect(() => {
    let ticker;
    const currentText = roles[textIndex];

    if (isDeleting) {
      ticker = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else {
      ticker = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(ticker);
  }, [charIndex, isDeleting, textIndex, typingSpeed, roles]);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Power BI Dashboard for PwC',
      description: 'Demonstrated expertise in data visualization through the creation of Power BI dashboards that effectively conveyed KPIs for PwC Switzerland.',
      technologies: ['Power BI', 'Data Visualization', 'KPI Analysis'],
      githubLink: 'https://github.com/Sohamlkulk',
      demoLink: '#',
      image: 'https://placehold.co/400x250/E5E7EB/1F2937?text=PowerBI+Project',
    },
    {
      id: 2,
      title: 'Data Analysis for Accenture',
      description: 'Cleaned, modelled, and analyzed 7 datasets to uncover insights into content trends for a hypothetical social media client at Accenture North America.',
      technologies: ['Data Analysis', 'Data Modeling', 'PowerPoint', 'Excel'],
      githubLink: 'https://github.com/Sohamlkulk',
      demoLink: '#',
      image: 'https://placehold.co/400x250/D1D5DB/1F2937?text=Data+Analytics+Project',
    },
    {
      id: 3,
      title: 'Calculator App',
      description: 'A functional calculator application demonstrating basic arithmetic operations and user interface design.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/Sohamlkulk',
      demoLink: '#',
      image: 'https://placehold.co/400x250/F3F4F6/1F2937?text=Calculator+App',
    },
    {
        id: 4,
        title: 'Remote RDP Hosting Solution',
        description: 'Developed a solution for remote RDP hosting, focusing on efficient connectivity and resource management.',
        technologies: ['Networking', 'System Administration', 'Scripting'],
        githubLink: 'https://github.com/Sohamlkulk',
        demoLink: '#',
        image: 'https://placehold.co/400x250/D1D5DB/1F2937?text=RDP+Hosting',
      },
      {
        id: 5,
        title: 'E-commerce Website Prototype (Figma)',
        description: 'Designed a comprehensive UI/UX prototype for an e-commerce website using Figma, focusing on user flow and visual appeal.',
        technologies: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'],
        githubLink: 'https://github.com/Sohamlkulk',
        demoLink: '#',
        image: 'https://placehold.co/400x250/E5E7EB/1F2937?text=Ecommerce+Prototype',
      },
      {
        id: 6,
        title: 'Chatbot App Prototype (Figma)',
        description: 'Created an interactive app prototype for a chatbot application in Figma, emphasizing user interaction and conversational design.',
        technologies: ['Figma', 'UI/UX Design', 'Chatbot Design', 'Prototyping'],
        githubLink: 'https://github.com/Sohamlkulk',
        demoLink: '#',
        image: 'https://placehold.co/400x250/F3F4F6/1F2937?text=Chatbot+Prototype',
      },
      {
        id: 7,
        title: 'Game Development Project',
        description: 'Developed a game using C#, demonstrating proficiency in game logic, graphics, and interactive elements.',
        technologies: ['C#', 'Unity', 'Game Development'],
        githubLink: 'https://github.com/Sohamlkulk',
        demoLink: '#',
        image: 'https://placehold.co/400x250/D1D5DB/1F2937?text=C%23+Game+Dev',
      },
      {
        id: 8,
        title: 'Major Cybersecurity Project (In Progress)',
        description: 'Currently working on a significant project in cybersecurity, focusing on [briefly mention area e.g., network security, data encryption, threat analysis].',
        technologies: ['Cybersecurity', 'Python', 'Networking'],
        githubLink: 'https://github.com/Sohamlkulk',
        demoLink: '#',
        image: 'https://placehold.co/400x250/E5E7EB/1F2937?text=Cybersecurity+Project',
      },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-inter">
      <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-90 shadow-lg py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#home" className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
            Soham Kulkarni
          </a>
          <div className="hidden md:flex space-x-6">
            <NavItem id="home" active={activeSection === 'home'} onClick={scrollToSection}>Home</NavItem>
            <NavItem id="about" active={activeSection === 'about'} onClick={scrollToSection}>About</NavItem>
            <NavItem id="skills" active={activeSection === 'skills'} onClick={scrollToSection}>Skills</NavItem>
            <NavItem id="experience" active={activeSection === 'experience'} onClick={scrollToSection}>Experience</NavItem>
            <NavItem id="projects" active={activeSection === 'projects'} onClick={scrollToSection}>Projects</NavItem>
            <NavItem id="contact" active={activeSection === 'contact'} onClick={scrollToSection}>Contact</NavItem>
          </div>
          <div className="md:hidden">
            <button className="text-gray-200 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 p-6 rounded-xl bg-gray-800 bg-opacity-70 backdrop-blur-sm">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fadeInUp">
            {displayedText}
            <span className="inline-block w-1 h-10 md:h-16 bg-white animate-blink ml-1"></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInUp animation-delay-500">
            Welcome to my digital space!
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 animate-bounce-slow"
          >
            View My Work
          </button>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300">
            <p className="mb-4">
              I am a passionate and driven Computer Science Engineering student currently pursuing my B.Tech at PCET's Pimpri Chinchwad University. My academic journey has equipped me with a strong foundation in various technical domains, including Web Development (HTML, CSS, JavaScript-React.js), Data Analytics, and Prompt Engineering.
            </p>
            <p className="mb-4">
              My virtual internships at PwC Switzerland and Accenture North America have provided me with invaluable hands-on experience in data visualization, analysis, and problem-solving. I am adept at transforming complex datasets into actionable insights and creating compelling visual dashboards.
            </p>
            <p>
              With a keen eye for detail and a commitment to data-driven decision-making, I thrive on building interactive and user-centric applications. I am always eager to learn new technologies and apply my skills to create innovative solutions that attract clients and solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <SkillCard icon="💻" title="Web Development" skills={['HTML', 'CSS', 'JavaScript', 'React.js']} />
            <SkillCard icon="📊" title="Data Analytics" skills={['Power BI', 'Data Modeling', 'Data Cleaning', 'Data Presentation']} />
            <SkillCard icon="🤖" title="Prompt Engineering" skills={['Advance Prompt Engineering', 'Llama 2 & 3']} />
            <SkillCard icon="✏️" title="Design & Tools" skills={['Figma', 'Fig-Jam', 'Overleaf & LaTeX']} />
            <SkillCard icon="⚙️" title="Programming" skills={['C', 'C++', 'Python', 'SQL']} />
            <SkillCard icon="🔐" title="Cybersecurity" skills={['Foundations of Cybersecurity', 'Ethical Hacking']} />
            <SkillCard icon="☁️" title="Cloud" skills={['Oracle Cloud Infrastructure', 'AWS']} />
            <SkillCard
              icon="🐧"
              title="Operating Systems"
              skills={[
                'Windows (XP, 7, 8, 10, 11)',
                'Kali Linux (GUI/Non-GUI)',
                'Ubuntu',
                'Linux Machine Language'
              ]}
            />
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <ExperienceCard
              company="Zidio"
              role="UI/UX Designer, Remote Internship"
              date="May 2025 - Completed"
              description={[
                "Completed a one-month remote internship focusing on UI/UX design principles and practices.",
              ]}
            />
            <ExperienceCard
              company="PwC, Switzerland"
              role="Data Analyst - Power BI, Virtual Internship"
              date="July 2024 - Completed"
              description={[
                "Strengthened Power BI skills to better understand clients and their data visualization needs.",
                "Demonstrated expertise in data visualization through the creation of Power BI dashboards that effectively conveyed KPIs.",
                "Communicated key insights and actionable suggestions based on data analysis to engagement partners.",
                "Examined HR data, focusing on gender-related KPIs, and identified root causes for gender balance issues at the executive management level."
              ]}
            />
            <ExperienceCard
              company="Accenture, North America"
              role="Data Analytics, Virtual Internship"
              date="July 2024 - Completed"
              description={[
                "Advised a hypothetical social media client as a Data Analyst.",
                "Cleaned, modeled, and analyzed 7 datasets to uncover insights into content trends.",
                "Prepared a PowerPoint deck and video presentation to communicate key insights for the client and internal stakeholders."
              ]}
            />
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <p className="mt-12 text-lg text-gray-400">
            Explore more projects on my <a href="https://github.com/Sohamlkulk" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">GitHub Profile</a>.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-lg text-gray-300 space-y-4">
            <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <p>
              <span className="font-semibold text-indigo-400">Email:</span>{' '}
              <a href="mailto:sohamlkulk@gmail.com" className="text-gray-300 hover:text-indigo-300 transition-colors duration-300">sohamlkulk@gmail.com</a>
            </p>
            <p>
              <span className="font-semibold text-indigo-400">Phone:</span>{' '}
              +91 8087788962
            </p>
            <p>
              <span className="font-semibold text-indigo-400">LinkedIn:</span>{' '}
              <a href="https://www.linkedin.com/in/soham-kulkarni-852733316" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-300 transition-colors duration-300">soham-kulkarni</a>
            </p>
            <p>
                <span className="font-semibold text-indigo-400">Address:</span> Polite Harmony, Chikhali, Pimpri Chinchwad, Pune, India 411062
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          &copy; {new Date().getFullYear()} Soham Kulkarni. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// NavItem Component for reusability
const NavItem = ({ id, active, onClick, children }) => (
  <a
    href={`#${id}`}
    onClick={(e) => { e.preventDefault(); onClick(id); }}
    className={`relative text-lg px-3 py-2 rounded-md transition-colors duration-300
      ${active ? 'text-indigo-400 font-bold' : 'text-gray-300 hover:text-white'}
      before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-indigo-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300
      ${active ? 'before:scale-x-100' : 'hover:before:scale-x-100'}`}
  >
    {children}
  </a>
);

// Skill Card Component
const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
    <ul className="text-gray-300 space-y-1">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center justify-center">
          <svg className="w-4 h-4 mr-2 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

// Experience Card Component
const ExperienceCard = ({ company, role, date, description }) => (
  <div className="bg-gray-900 rounded-xl p-8 shadow-xl border border-gray-700">
    <h3 className="text-3xl font-bold text-indigo-400 mb-2">{company}</h3>
    <p className="text-xl font-semibold text-white mb-2">{role}</p>
    <p className="text-md text-gray-400 mb-4">{date}</p>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      {description.map((point, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 mr-2 mt-1 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-52 object-cover object-center"
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/6B7280/FFFFFF?text=Image+Not+Found'; }}
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-gray-700 text-indigo-300 text-sm px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-start space-x-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.168 6.839 9.482.5.09.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.829.091-.645.356-1.087.649-1.334-2.22-.253-4.555-1.119-4.555-4.931 0-1.09.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.099 2.65a3.736 3.736 0 011.028 2.688c0 3.821-2.339 4.675-4.562 4.922.357.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .268.18.579.688.481C17.13 18.232 20 14.484 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
          </svg>
          GitHub
        </a>
        {project.demoLink && project.demoLink !== '#' && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057 .458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);
export default App;
