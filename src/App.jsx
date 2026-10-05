import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Network, Server, Code, Lock, Cpu, Github, Linkedin, Mail, FileText, ChevronRight, ExternalLink, Download, Moon, ArrowUpRight, GraduationCap, Target, Instagram } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans text-gray-200 selection:bg-cyber-orange selection:text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-dot-pattern opacity-40 pointer-events-none z-0" />

      {/* Navigation - Retained Pill Design */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full py-3 px-6 w-full max-w-5xl flex justify-between items-center shadow-2xl"
        >
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
        </motion.nav>
      </div>

      <main className="relative z-10 pt-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 py-12 relative">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-8 relative z-10"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyber-orange animate-pulse" />
              <span className="font-mono text-[10px] text-gray-300 tracking-widest uppercase">Available for new opportunities</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="font-mono text-cyber-orange text-xs md:text-sm tracking-widest uppercase flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>BCA Student</span>
              <span className="text-gray-600">•</span>
              <span>Cybersecurity Enthusiast</span>
              <span className="text-gray-600">•</span>
              <span>Ethical Hacker</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-white tracking-tighter leading-[1.05]">
              Learning how <br/>
              <span className="text-gradient-primary text-glow">systems work.</span>
            </motion.h1>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl text-gray-400 font-medium tracking-tight">
              Understanding how they can be secured.
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl text-lg leading-relaxed">
              I'm a BCA student exploring cybersecurity, ethical hacking, networking, Linux and technology through hands-on learning and projects.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group">
                View Projects <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={18} />
              </a>
              <a href="#about" className="glass-card hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all text-center flex items-center justify-center gap-2">
                Explore Journey
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Visual: Terminal Window replacing the giant shield */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full max-w-lg hidden lg:block"
          >
            <div className="glass-card rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="bg-[#121214] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-gray-500 ml-4 flex-1 text-center pr-10">yahya@portfolio:~</div>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <span className="text-cyber-orange">❯</span> <span className="text-blue-400">whoami</span>
                  <div className="text-gray-300 mt-1">yahya_sameeh</div>
                </div>
                <div>
                  <span className="text-cyber-orange">❯</span> <span className="text-blue-400">cat</span> education.txt
                  <div className="text-gray-300 mt-1">BCA Student @ ISS Arts and Science College</div>
                </div>
                <div>
                  <span className="text-cyber-orange">❯</span> <span className="text-blue-400">sudo</span> load_skills --category="security"
                  <div className="text-gray-400 mt-1 animate-pulse">Loading modules...</div>
                  <div className="text-green-400 mt-1">[OK] Linux Fundamentals</div>
                  <div className="text-green-400">[OK] Networking Basics</div>
                  <div className="text-green-400">[OK] Ethical Hacking Foundations</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyber-orange">❯</span> <span className="w-2 h-4 bg-gray-400 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

        </section>

        {/* BENTO GRID: ABOUT & SKILLS */}
        <section id="about" className="py-24">
          <SectionHeader title="About & Expertise" subtitle="Building a strong foundation in tech and security." />

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 mt-12">
            
            {/* About Box - Spans 2 cols */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="glass-card glass-card-hover rounded-2xl p-8 md:col-span-2 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none">
                <Terminal size={300} className="-mr-12 -mt-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Curious about technology.<br/><span className="text-gray-500">Focused on security.</span></h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm Yahya Sameeh PP, currently pursuing my BCA under the University of Calicut. My true interest lies in understanding the deep mechanics of computers, networks, and applications—and discovering how to protect them.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I learn primarily through hands-on exploration, building practical projects, and testing security principles in controlled, legal environments like TryHackMe and Hack The Box.
              </p>
            </motion.div>

            {/* Education Box */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between border-t-4 border-t-cyber-orange"
            >
              <div>
                <GraduationCap className="text-cyber-orange mb-4" size={32} />
                <h3 className="font-bold text-lg text-white mb-1">Education</h3>
                <div className="text-gray-400 text-sm mb-6">Bachelor of Computer Applications</div>
              </div>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-500">Institution</span>
                  <span className="text-right text-gray-300">ISS Arts & Science</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-500">Semester</span>
                  <span className="text-right text-gray-300">3rd Semester</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Started</span>
                  <span className="text-right text-gray-300">2025</span>
                </div>
              </div>
            </motion.div>

            {/* Hands-on Learning Box */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <Target className="text-cyber-orange mb-4" size={32} />
                <h3 className="font-bold text-lg text-white mb-2">Hands-on Learning</h3>
                <p className="text-gray-400 text-sm mb-6">Turning theory into practical knowledge through dedicated platforms.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["TryHackMe", "Hack The Box", "Kali Linux", "Nmap"].map(item => (
                  <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300">{item}</span>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Box - Spans 2 cols */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="glass-card glass-card-hover rounded-2xl p-8 md:col-span-2"
            >
              <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2"><Code size={20} className="text-cyber-orange"/> Tech Arsenal</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">Cybersecurity</div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyber-orange"/> Ethical Hacking</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyber-orange"/> Networking</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyber-orange"/> Linux</li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">Programming</div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-400"/> C++</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-400"/> Python</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-400"/> JavaScript</li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">Web Dev</div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-400"/> HTML / CSS</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-400"/> APIs</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-400"/> Git & GitHub</li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">Exploring</div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-400"/> SQL & DBs</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-400"/> Dart</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-400"/> Flutter</li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <SectionHeader title="Selected Projects" subtitle="Practical applications of my learning journey." />

          <div className="space-y-6 mt-12">
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
              desc="A high-end cinematic personal portfolio designed with premium UX principles to showcase my education, technical interests, and cybersecurity journey."
              tech={["React", "Tailwind CSS", "Framer Motion"]}
            />

            <ProjectCard 
              num="03"
              title="Student Attendance System"
              category="Web Application"
              status="In Development / Planned"
              desc="A student attendance management concept designed with separate student and teacher experiences."
              features={[
                "Role-based Login System",
                "Dedicated Student/Teacher Dashboards",
                "Daily attendance tracking (6 periods/day)"
              ]}
              tech={[]}
            />
          </div>
        </section>

        {/* JOURNEY SECTION */}
        <section id="journey" className="py-24">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">My journey is just getting started.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Every skill is another piece of the bigger picture. My goal is to build strong technical foundations, gain real-world experience, and develop a career focused on ethical hacking and defensive security.
              </p>
            </div>

            <div className="flex-1 relative border-l border-white/10 ml-4 space-y-12 pb-8">
              <TimelineItem year="2025" title="Started BCA">
                Beginning my journey in computer applications.
              </TimelineItem>
              <TimelineItem year="2025–2026" title="Programming Foundations">
                Building core logic with C++, Python, and HTML.
              </TimelineItem>
              <TimelineItem year="2026" title="Cybersecurity Exploration">
                Diving into Linux, Networking, Kali Linux, Nmap, and Ethical Hacking concepts.
              </TimelineItem>
              <TimelineItem year="CURRENT" title="Expanding My Skills" isCurrent>
                Exploring Databases, SQL, JavaScript, Dart, and Flutter.
              </TimelineItem>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Let's connect.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                I'm always interested in learning, building projects, exploring cybersecurity and connecting with people in technology.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <a href="https://github.com/yahyasameeh1111" target="_blank" rel="noreferrer" className="glass-card flex items-center justify-center gap-3 p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="font-semibold text-white">GitHub</span>
              </a>
              <a href="https://www.instagram.com/yyeyy_yyaaa/" target="_blank" rel="noreferrer" className="glass-card flex items-center justify-center gap-3 p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                <Instagram size={24} className="text-gray-400 group-hover:text-[#E1306C] transition-colors" />
                <span className="font-semibold text-white">Instagram</span>
              </a>
              <a href="mailto:yahyasameeh1111@gmail.com" className="glass-card flex items-center justify-center gap-3 p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                <Mail size={24} className="text-gray-400 group-hover:text-cyber-orange transition-colors" />
                <span className="font-semibold text-white">Email</span>
              </a>
              <a href="#" className="glass-card flex items-center justify-center gap-3 p-6 rounded-2xl hover:bg-white/5 transition-colors group border-cyber-orange/20 hover:border-cyber-orange/50">
                <FileText size={24} className="text-cyber-orange" />
                <span className="font-semibold text-white">Resume</span>
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 mt-12 text-center relative z-10 bg-[#050505]">
        <div className="font-mono text-cyber-orange font-bold text-xl mb-4 tracking-tighter">YAHYA SAMEEH PP</div>
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://github.com/yahyasameeh1111" target="_blank" rel="noreferrer" className="p-2 text-gray-500 hover:text-white transition-colors bg-white/5 rounded-full"><Github size={18} /></a>
          <a href="https://www.instagram.com/yyeyy_yyaaa/" target="_blank" rel="noreferrer" className="p-2 text-gray-500 hover:text-white transition-colors bg-white/5 rounded-full"><Instagram size={18} /></a>
        </div>
        <div className="text-gray-400 italic mb-6">"Learning. Building. Securing."</div>
        <div className="text-gray-600 text-sm">© 2026 Yahya Sameeh PP</div>
      </footer>
    </div>
  )
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-gray-400 text-lg">
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

function ProjectCard({ num, title, category, desc, tech = [], status, demo, features }) {
  const content = (
    <>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
        <div>
          <div className="font-mono text-cyber-orange text-sm mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-orange" /> PROJECT {num}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyber-orange transition-colors">{title}</h3>
          <div className="text-sm text-gray-500 font-mono mb-4">{category} • {status}</div>
        </div>
        {demo && (
          <div className="flex items-center gap-2 text-sm bg-cyber-orange/10 group-hover:bg-cyber-orange text-cyber-orange group-hover:text-black px-4 py-2 rounded-full font-semibold transition-all mt-2 md:mt-0 shadow-sm">
            Live Demo <ArrowUpRight size={16} />
          </div>
        )}
      </div>
      
      <p className="text-gray-400 text-lg mb-6 max-w-3xl leading-relaxed">{desc}</p>
      
      {features && features.length > 0 && (
        <ul className="grid sm:grid-cols-2 gap-2 text-gray-400 mb-6 text-sm">
          {features.map((f, i) => <li key={i} className="flex items-center gap-2"><ChevronRight size={14} className="text-cyber-orange"/> {f}</li>)}
        </ul>
      )}

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
          {tech.map((t, i) => (
            <span key={i} className="text-xs font-mono text-gray-300 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">{t}</span>
          ))}
        </div>
      )}
    </>
  );

  if (demo) {
    return (
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <a href={demo} target="_blank" rel="noreferrer" className="block glass-card rounded-2xl p-8 group cursor-pointer hover:border-cyber-orange/40 hover:shadow-[0_8px_40px_rgba(255,77,0,0.1)] transition-all">
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass-card rounded-2xl p-8 group">
      {content}
    </motion.div>
  )
}

function TimelineItem({ year, title, children, isCurrent }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative pl-10 group">
      <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-[7px] rounded-full border-2 border-[#050505] transition-colors ${isCurrent ? 'bg-cyber-orange shadow-[0_0_10px_rgba(255,77,0,0.5)]' : 'bg-gray-600 group-hover:bg-gray-400'}`} />
      <div className={`text-xs font-mono mb-2 tracking-widest uppercase ${isCurrent ? 'text-cyber-orange font-bold' : 'text-gray-500'}`}>{year}</div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 leading-relaxed">{children}</p>
    </motion.div>
  )
}
