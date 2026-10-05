import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Network, Server, Code, Lock, Cpu, Github, Linkedin, Mail, FileText, ChevronRight, ExternalLink, Download, Moon } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-lg md:text-xl max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  return (
    <div className="bg-cyber-dark min-h-screen font-sans selection:bg-cyber-orange selection:text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full py-3 px-6 w-full max-w-5xl flex justify-between items-center shadow-2xl">
          
          {/* Left: Branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyber-orange to-[#ff6a00] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_10px_rgba(255,77,0,0.4)]">
              Y
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white tracking-tight">YAHYA SAMEEH PP</span>
              <span className="hidden sm:inline text-gray-500 text-[10px] font-mono tracking-widest uppercase mt-0.5">— BCA Student</span>
            </div>
          </div>

          {/* Middle: Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-cyber-orange to-[#ff5500] hover:brightness-110 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_4px_15px_rgba(255,77,0,0.3)]">
              <Download size={16} /> Resume
            </button>
            <button className="p-2.5 rounded-[12px] bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
              <Moon size={16} />
            </button>
          </div>
          
        </nav>
      </div>

      <main className="relative z-10 pt-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center relative">

          <div className="space-y-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-cyber-orange text-sm md:text-base tracking-widest uppercase flex flex-col md:flex-row gap-2 md:gap-4"
            >
              <span>BCA Student</span>
              <span className="hidden md:inline text-gray-600">///</span>
              <span>Cybersecurity Enthusiast</span>
              <span className="hidden md:inline text-gray-600">///</span>
              <span>Ethical Hacking Learner</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1]"
            >
              Learning how <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-orange to-cyber-red text-glow">systems work.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl text-gray-400 font-semibold tracking-tight"
            >
              Understanding how they can be secured.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 max-w-2xl text-lg md:text-xl pt-4"
            >
              I'm a BCA student exploring cybersecurity, ethical hacking, networking, Linux and technology through hands-on learning and projects.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <a href="#journey" className="bg-cyber-orange/10 hover:bg-cyber-orange/20 border border-cyber-orange text-cyber-orange px-8 py-4 rounded-sm font-medium transition-all flex items-center justify-center gap-2 group">
                Explore My Journey <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="#projects" className="glass-card hover:bg-white/5 text-white px-8 py-4 rounded-sm font-medium transition-all text-center">
                View Projects
              </a>
              <button className="text-gray-400 hover:text-white px-8 py-4 font-medium transition-colors text-center">
                Download Resume
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono text-gray-500 tracking-widest">SCROLL TO EXPLORE</span>
            <motion.div 
              animate={{ y: [0, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-[1px] h-12 bg-gradient-to-b from-cyber-orange to-transparent"
            />
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 border-t border-white/5">
          <SectionHeading subtitle="My interest lies in understanding how computers, networks and applications work and how they can be protected.">
            Curious about technology.<br/>
            <span className="text-gray-500">Focused on security.</span>
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm Yahya Sameeh PP, a BCA student at ISS Arts and Science College under the University of Calicut.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm currently building my foundations in cybersecurity, ethical hacking, Linux, networking, programming and web technologies.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I learn mainly by exploring technologies, building small projects, using practical tools and experimenting in controlled environments.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="grid grid-cols-2 gap-4">
              {[
                { label: "EDUCATION", value: "BCA" },
                { label: "CURRENT LEVEL", value: "3rd Semester" },
                { label: "COLLEGE", value: "ISS Arts and Science College" },
                { label: "UNIVERSITY", value: "University of Calicut" },
                { label: "STARTED", value: "2025" },
                { label: "EXPECTED GRAD.", value: "2028" } // Assuming 3-year BCA
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-sm border-l-2 border-l-cyber-orange">
                  <div className="text-xs font-mono text-gray-500 mb-2">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 border-t border-white/5">
          <SectionHeading subtitle="Building foundations across development and security domains.">
            Currently Learning & Building
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory title="CYBERSECURITY" icon={<Shield size={20} className="text-cyber-orange"/>}>
              <Skill name="Ethical Hacking" level="Beginner" />
              <Skill name="Linux" level="Beginner" />
              <Skill name="Networking" level="Beginner" />
              <Skill name="Kali Linux" level="Hands-on Learning" />
              <Skill name="Nmap" level="Hands-on Learning" />
            </SkillCategory>
            
            <SkillCategory title="PROGRAMMING" icon={<Code size={20} className="text-cyber-orange"/>}>
              <Skill name="C++" level="Beginner" />
              <Skill name="Python" level="Beginner" />
            </SkillCategory>
            
            <SkillCategory title="WEB DEVELOPMENT" icon={<Server size={20} className="text-cyber-orange"/>}>
              <Skill name="HTML" level="Intermediate" />
              <Skill name="CSS" level="Currently Learning" />
              <Skill name="JavaScript" level="Currently Learning" />
            </SkillCategory>

            <SkillCategory title="DEVELOPMENT TOOLS" icon={<Terminal size={20} className="text-cyber-orange"/>}>
              <Skill name="Git" level="Intermediate" />
              <Skill name="GitHub" level="Intermediate" />
            </SkillCategory>

            <SkillCategory title="CURRENTLY EXPLORING" icon={<Cpu size={20} className="text-cyber-orange"/>}>
              <Skill name="APIs" level="Beginner" />
              <Skill name="Databases" level="Currently Learning" />
              <Skill name="SQL" level="Currently Learning" />
              <Skill name="Dart" level="Currently Learning" />
              <Skill name="Flutter" level="Currently Learning" />
            </SkillCategory>
          </div>
        </section>

        {/* CYBERSECURITY SECTION */}
        <section className="py-24 border-t border-white/5 relative">
          <div className="absolute right-0 top-20 w-64 h-64 bg-cyber-orange/5 rounded-full blur-[100px] pointer-events-none" />
          
          <SectionHeading subtitle="My cybersecurity journey is focused on understanding systems, networks, vulnerabilities and security tools through legal and controlled learning environments.">
            Learning to think like an attacker.<br/>
            <span className="text-cyber-orange">Building the mindset of a defender.</span>
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Linux", status: "Beginner", icon: <Terminal size={24} />, desc: "Understanding core OS mechanics, command-line operations, and system administration basics." },
              { title: "Networking", status: "Beginner", icon: <Network size={24} />, desc: "Exploring protocols, packets, routing, and how data moves across the internet." },
              { title: "Kali Linux", status: "Hands-on Learning", icon: <Shield size={24} />, desc: "Getting familiar with the industry-standard penetration testing distribution." },
              { title: "Nmap", status: "Hands-on Learning", icon: <Server size={24} />, desc: "Learning network discovery and security auditing through port scanning." },
              { title: "TryHackMe", status: "Active Learning", icon: <Lock size={24} />, desc: "Solving guided learning paths and foundational security challenges." },
              { title: "Hack The Box", status: "Active Learning", icon: <Cpu size={24} />, desc: "Practicing on vulnerable machines in a safe, simulated environment." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass-card p-6 rounded-sm h-full flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="font-mono text-xs text-cyber-orange mb-4">{item.status}</div>
                  <p className="text-gray-400 text-sm mt-auto">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 border-t border-white/5">
          <SectionHeading>
            Projects <span className="text-gray-600">///</span>
          </SectionHeading>

          <div className="space-y-12">
            <ProjectCard 
              num="01"
              title="API Learning Lab"
              category="Web Development / API Learning"
              status="Learning Project"
              desc="A practical learning project created to understand REST APIs, CRUD operations, requests, responses and API-based application development."
              tech={["REST API", "DummyJSON", "HTML", "GitHub"]}
              demo="https://apilearninglab.netlify.app/"
            />
            
            <ProjectCard 
              num="02"
              title="Personal Portfolio"
              category="Portfolio / Web Development"
              status="Personal Project"
              desc="A personal portfolio designed to showcase my education, technical interests, projects and cybersecurity learning journey."
              tech={["React", "Tailwind CSS", "Framer Motion"]}
            />

            <ProjectCard 
              num="03"
              title="Student Attendance Management System"
              category="Web Application"
              status="In Development / Planned"
              desc="A student attendance management concept designed with separate student and teacher experiences."
              features={[
                "Login system",
                "Student/Teacher dashboards",
                "Student-specific attendance",
                "Daily attendance tracking (6 periods/day)"
              ]}
              tech={[]}
            />
          </div>
        </section>

        {/* JOURNEY SECTION */}
        <section id="journey" className="py-24 border-t border-white/5">
          <SectionHeading subtitle="My journey is just getting started.">
            Learning Path
          </SectionHeading>

          <div className="max-w-3xl relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pb-12">
            <TimelineItem year="2025" title="Started BCA">
              Beginning my journey in computer applications and technology.
            </TimelineItem>
            
            <TimelineItem year="2025–2026" title="Programming Foundations">
              Building core logic with C++, Python, and HTML.
            </TimelineItem>
            
            <TimelineItem year="2026" title="Cybersecurity Exploration">
              Diving into Linux, Networking, Kali Linux, Nmap, and Ethical Hacking concepts.
            </TimelineItem>
            
            <TimelineItem year="2026" title="Practical Security Learning">
              Applying theory through TryHackMe and Hack The Box platforms.
            </TimelineItem>

            <TimelineItem year="2026" title="Web & API Exploration">
              Understanding REST APIs, CRUD operations, and version control with Git/GitHub.
            </TimelineItem>

            <TimelineItem year="CURRENT" title="Expanding My Skills" isCurrent>
              Continuously exploring Databases, SQL, JavaScript, CSS, Dart, and Flutter.
            </TimelineItem>
          </div>
        </section>

        {/* GOALS & CONTACT */}
        <section className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Where I'm heading.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                My goal is to build strong technical foundations, gain real-world experience and develop a career in cybersecurity.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm particularly interested in ethical hacking, penetration testing, network security and defensive security.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="glass-card p-8 rounded-sm">
              <h2 className="text-2xl font-bold mb-4">Let's connect.</h2>
              <p className="text-gray-400 mb-8">
                I'm always interested in learning, building projects, exploring cybersecurity and connecting with people in technology.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <ContactButton icon={<Github size={18}/>} label="GitHub" disabled />
                <ContactButton icon={<Linkedin size={18}/>} label="LinkedIn" disabled />
                <ContactButton icon={<Mail size={18}/>} label="Email" disabled />
                <ContactButton icon={<FileText size={18}/>} label="Resume" disabled />
              </div>
              <p className="text-xs text-gray-600 mt-4 font-mono">* Links will be activated once provided.</p>
            </FadeIn>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center relative z-10 bg-black/50">
        <div className="font-mono text-cyber-orange font-bold text-xl mb-4 tracking-tighter">YAHYA SAMEEH PP</div>
        <div className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-4">
          BCA • Cybersecurity • Ethical Hacking
        </div>
        <div className="text-gray-400 italic mb-8">"Learning. Building. Securing."</div>
        <div className="text-gray-600 text-sm">© 2026 Yahya Sameeh PP</div>
      </footer>
    </div>
  )
}

function SkillCategory({ title, icon, children }) {
  return (
    <FadeIn className="glass-card p-6 rounded-sm">
      <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
        {icon}
        <h3 className="font-bold text-white tracking-wide">{title}</h3>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </FadeIn>
  )
}

function Skill({ name, level }) {
  return (
    <div className="flex justify-between items-center group">
      <span className="text-gray-300 group-hover:text-cyber-orange transition-colors">{name}</span>
      <span className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-400 rounded-sm">{level}</span>
    </div>
  )
}

function ProjectCard({ num, title, category, desc, tech = [], status, demo, features }) {
  const content = (
    <>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
        <div>
          <div className="font-mono text-cyber-orange text-sm mb-2">PROJECT {num}</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyber-orange transition-colors">{title}</h3>
          <div className="text-sm text-gray-500 font-mono mb-4">{category} • {status}</div>
        </div>
        {demo && (
          <div className="flex items-center gap-2 text-sm bg-cyber-orange/10 group-hover:bg-cyber-orange text-cyber-orange group-hover:text-white px-4 py-2 rounded-sm transition-colors w-fit h-fit mt-2 md:mt-0">
            Live Demo <ExternalLink size={14} />
          </div>
        )}
      </div>
      
      <p className="text-gray-400 text-lg mb-6 max-w-3xl">{desc}</p>
      
      {features && features.length > 0 && (
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      )}

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {tech.map((t, i) => (
            <span key={i} className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-sm">{t}</span>
          ))}
        </div>
      )}
    </>
  );

  if (demo) {
    return (
      <FadeIn>
        <a href={demo} target="_blank" rel="noreferrer" className="block glass-card rounded-sm p-8 group cursor-pointer hover:border-cyber-orange/40 hover:shadow-[0_4px_30px_rgba(255,77,0,0.1)] transition-all">
          {content}
        </a>
      </FadeIn>
    );
  }

  return (
    <FadeIn className="glass-card rounded-sm p-8 group">
      {content}
    </FadeIn>
  )
}

function TimelineItem({ year, title, children, isCurrent }) {
  return (
    <FadeIn className="relative pl-8 md:pl-12">
      <div className={`absolute left-0 top-1.5 w-3 h-3 -translate-x-[6.5px] rounded-full border-2 border-cyber-dark ${isCurrent ? 'bg-cyber-orange' : 'bg-gray-600'}`} />
      <div className={`text-xs font-mono mb-2 ${isCurrent ? 'text-cyber-orange font-bold' : 'text-gray-500'}`}>{year}</div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{children}</p>
    </FadeIn>
  )
}

function ContactButton({ icon, label, disabled }) {
  return (
    <button 
      disabled={disabled}
      className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-white/5 border border-white/10 px-4 py-3 rounded-sm transition-colors text-gray-300"
    >
      {icon} <span className="text-sm font-medium">{label}</span>
    </button>
  )
}
