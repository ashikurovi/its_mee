'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Github, Linkedin, Mail, Menu, MoveUpRight, Sparkles, X, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

const nav = [{ label: 'Home', id: 'home' }, { label: 'About', id: 'about' }, { label: 'Experience', id: 'experience' }, { label: 'Projects', id: 'projects' }, { label: 'Ventures', id: 'ventures' }, { label: 'Skills', id: 'skills' }, { label: 'Contact', id: 'contact' }];
const stats = [{ value: '3.5+', label: 'Years in the industry' }, { value: '2,500+', label: 'Student connections' }, { value: '100+', label: 'Campus communities' }, { value: '100K', label: 'BDT revenue contribution' }];
const projects = [
  { n: '01', name: 'BDRCS', type: 'Institutional platform', desc: 'Contributed to the web platform for Bangladesh Red Crescent Society, facilitating humanitarian outreach, relief coordination, and volunteer services.', tags: ['Institutional', 'Humanitarian', 'Web Platform'], image: '/project-bdrcs.jpg', url: 'https://bdrcs.org/' },
  { n: '02', name: 'FICCI', type: 'Industry & business chamber', desc: 'Digital platform for Foreign Investors’ Chamber of Commerce & Industry, promoting multinational commerce, publications, and investment in Bangladesh.', tags: ['Business', 'Commerce Portal', 'Trade & Industry'], image: '/project-ficci.jpg', url: 'https://ficci.org.bd/' },
  { n: '03', name: 'CTL Weather', type: 'Meteorological & weather tech', desc: 'Interactive meteorological product presenting atmospheric radar data, temperature metrics, and live weather insights with intuitive data presentation.', tags: ['Weather Tech', 'Data Experience', 'Live Systems'], image: '/project-ctlweather.jpg', url: 'https://ctlweather.com/' },
];
const skillGroups = [
  { title: 'Engineering', note: 'How I approach the work', items: ['Software Engineering', 'Product Development', 'API Development', 'Software Architecture'] },
  { title: 'Product & Business', note: 'Turning ideas into outcomes', items: ['Product Thinking', 'Technical Problem-solving', 'Entrepreneurship', 'Business Operations'] },
  { title: 'People & Community', note: 'Growing alongside others', items: ['Community Building', 'Campus Engagement', 'Educational Initiatives', 'Cross-functional Collaboration'] },
];
const socials = [
  { label: 'GitHub', href: 'https://github.com/ashikurovibd71', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashikurovi', icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/ashikurovi.1', icon: ExternalLink },
];

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: reduce ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [portraitReady, setPortraitReady] = useState(true);
  const [year, setYear] = useState('2026');
  useEffect(() => {
    setYear(String(new Date().getFullYear()));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-35% 0px -55% 0px' });
    nav.forEach(item => { const el = document.getElementById(item.id); if (el) observer.observe(el); });
    return () => { observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const mailto = 'mailto:ashikurovi2003@gmail.com';

  return <main>
    <div className="ambient ambient-a" aria-hidden="true"/><div className="ambient ambient-b" aria-hidden="true"/>
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Ovi home">
          <span className="brand-mark">
            <img src="/brand-icon.jpg" alt="Ovi brand emblem" />
          </span>
          <span>ovi<span className="brand-dot">/</span>dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="nav-links">
          {nav.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </a>
          ))}
          <a href={mailto} className="nav-cta">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`menu-toggle ${menuOpen ? 'menu-toggle-active' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          <span className="toggle-burger-box">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </span>
          <span className="toggle-burger-label">{menuOpen ? 'CLOSE' : 'MENU'}</span>
        </button>
      </nav>
    </header>

    {/* Mobile Navigation Drawer */}
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            className="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <motion.aside
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          >
            <div className="drawer-glow" aria-hidden="true" />
            <div className="drawer-header">
              <a href="#home" className="brand" onClick={closeMenu} aria-label="Ovi home">
                <span className="brand-mark">
                  <img src="/brand-icon.jpg" alt="Ovi brand emblem" />
                </span>
                <span>ovi<span className="brand-dot">/</span>dev</span>
              </a>
              <button
                className="drawer-close-btn"
                onClick={closeMenu}
                aria-label="Close navigation"
              >
                <X size={18} />
              </button>
            </div>

            <div className="drawer-coo-badge">
              <span className="drawer-coo-sparkle">✦</span>
              <div className="drawer-coo-text">
                <strong>Co-Founder &amp; COO</strong>
                <span>Creatibuz Studio</span>
              </div>
              <span className="drawer-live-pulse"><i /> LIVE</span>
            </div>

            <div className="drawer-nav-label">PORTFOLIO DIRECTORY</div>

            <nav className="drawer-nav-list" aria-label="Mobile Directory">
              {nav.map((item, idx) => {
                const isActive = active === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`drawer-nav-item ${isActive ? 'drawer-nav-item-active' : ''}`}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + idx * 0.035, duration: 0.25 }}
                  >
                    <span className="drawer-item-index">0{idx + 1}</span>
                    <span className="drawer-item-title">{item.label}</span>
                    {isActive && <span className="drawer-active-dot" />}
                    <ArrowUpRight className="drawer-item-arrow" size={17} />
                  </motion.a>
                );
              })}
            </nav>

            <div className="drawer-footer">
              <a href={mailto} className="button button-primary drawer-cta" onClick={closeMenu}>
                Start a conversation <ArrowUpRight size={16} />
              </a>
              <div className="drawer-socials">
                <a
                  href="https://wa.me/8801581721893"
                  target="_blank"
                  rel="noreferrer"
                  className="drawer-social-chip"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <a
                  href="https://github.com/ashikurovibd71"
                  target="_blank"
                  rel="noreferrer"
                  className="drawer-social-chip"
                >
                  <Github size={14} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ashikurovi"
                  target="_blank"
                  rel="noreferrer"
                  className="drawer-social-chip"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
              <div className="drawer-meta">
                <span><MapPin size={12} /> Bangladesh</span>
                <span>23°48&apos; N / 90°24&apos; E</span>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>

    <section className="hero section" id="home"><div className="container hero-grid">
      <div className="hero-copy"><motion.div className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><span className="status-dot"/> SOFTWARE · PRODUCTS · PEOPLE</motion.div>
        <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>Independent thinker. Intentional builder.</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .1, ease: [.22, 1, .36, 1] }}>Ashikur Rahman<br/><span className="gradient-text">Ovi<span className="period">.</span></span></motion.h1>
        <motion.div className="hero-coo-banner" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .25, ease: [.22, 1, .36, 1] }}>
          <div className="coo-badge-pill">
            <span className="coo-sparkle">✦</span>
            <span>EXECUTIVE LEADERSHIP</span>
            <span className="coo-pill-sep">·</span>
            <span className="coo-company">CREATIBUZ STUDIO</span>
          </div>
          <div className="coo-big-title">
            Co-Founder <span className="coo-amp">&amp;</span> COO
          </div>
          <div className="coo-sub-line">
            <span>Creatibuz Studio</span>
            <span className="coo-dot">•</span>
            <span>Founder at Durdom Crafters</span>
            <span className="coo-dot">•</span>
            <span>Software Engineer</span>
          </div>
        </motion.div>
        <p className="hero-description">Building digital products. Guiding startup operations. <span>Engineering scalable solutions.</span> I bring software, operational leadership, and community growth together to make meaningful things happen.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-quiet" href="#contact">Let&apos;s connect <ArrowDownRight size={17}/></a></div>
        <div className="hero-socials">{socials.slice(0,2).map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer"><s.icon size={16}/>{s.label}<ArrowUpRight size={12}/></a>)}<span className="social-divider"/><span className="location"><MapPin size={14}/> Bangladesh</span></div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96, x: 16 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .85, delay: .2, ease: [.22, 1, .36, 1] }}>
        <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
        <div className="portrait-frame"><div className="portrait-topline"><span>PERSONAL ARCHIVE / 001</span><span className="tiny-live"><i/> ONLINE</span></div>
          {portraitReady ? <img className="portrait" src="/ovi-portrait.jpg" alt="Portrait of Ashikur Rahman Ovi" onError={() => setPortraitReady(false)}/> : <div className="portrait-fallback"><div className="fallback-ring"><span>OVI</span></div><span className="fallback-caption">YOUR PORTRAIT GOES HERE</span><span className="fallback-sub">Add <code>public/ovi-portrait.jpg</code></span></div>}
          <div className="portrait-shade"/><div className="portrait-caption"><div><span className="caption-overline">ENGINEERED WITH INTENT</span><strong>Curious by nature.<br/>Builder by choice.</strong></div><span className="caption-index">01 — 04</span></div>
        </div><div className="floating-card card-coo"><span className="coo-mark"><BriefcaseBusiness size={17}/></span><div><strong>Co-Founder &amp; COO</strong><span>Creatibuz Studio</span></div></div><div className="floating-card card-community"><span className="community-mark"><Code2 size={17}/></span><div><strong>Software Engineer</strong><span>3.5+ Years Experience</span></div></div>
        <span className="visual-coordinate">23°48&apos; N / 90°24&apos; E</span>
      </motion.div>
    </div><a className="scroll-cue" href="#about"><span className="scroll-line"/>SCROLL TO EXPLORE <ArrowDownRight size={14}/></a></section>

    <section className="ticker" aria-label="Areas of focus"><div className="ticker-track">{['SOFTWARE ENGINEERING','PRODUCT THINKING','COMMUNITY BUILDING','TECH ENTREPRENEURSHIP','SOFTWARE ENGINEERING','PRODUCT THINKING','COMMUNITY BUILDING','TECH ENTREPRENEURSHIP'].map((t,i)=><span key={`${t}-${i}`}>{t}<i>✳</i></span>)}</div></section>

    <section className="section about-section" id="about"><div className="container"><div className="section-heading"><Reveal><span className="section-index">01 / THE PERSON</span><h2>More than<br/>just <span className="serif-accent">code.</span></h2></Reveal><Reveal delay={.1} className="heading-aside"><span className="aside-rule"/><p>I work at the intersection of <b>engineering, product thinking, and people.</b></p></Reveal></div>
      <div className="about-grid"><Reveal className="about-copy"><p className="lead-copy">I&apos;m a software engineer and entrepreneur who enjoys turning complex problems into thoughtful digital experiences.</p><p>Since starting my journey in 2022, I&apos;ve contributed to real-world software projects, explored product ideas, and worked with teams to move ideas into implementation. My work also extends beyond the screen—connecting students with technology, learning, and career opportunities.</p><p>I believe the best outcomes happen when solid engineering meets an understanding of the people it serves.</p><a className="text-link" href="#experience">A little more about my journey <ArrowUpRight size={16}/></a></Reveal>
      <Reveal className="about-note" delay={.12}><div className="note-top"><span>THE WAY I SEE IT</span><Sparkles size={17}/></div><blockquote>“Good technology should feel less like technology—and more like a problem finally solved.”</blockquote><div className="note-bottom"><span>PERSONAL PRINCIPLE</span><span>✳ 2022 — NOW</span></div></Reveal></div>
      <div className="stats-grid">{stats.map((s,i)=><Reveal key={s.label} delay={i*.07} className="stat-card"><span className="stat-index">0{i+1}</span><strong>{s.value}{i===3 && <small> BDT</small>}</strong><span className="stat-label">{s.label}</span><span className="stat-rule"/></Reveal>)}</div><p className="stats-footnote">Reported career and community impact figures; revenue and student connections reflect community-related initiatives, not software development alone.</p>
    </div></section>

    <section className="section experience-section" id="experience"><div className="container"><div className="section-heading"><Reveal><span className="section-index">02 / THE JOURNEY</span><h2>Work that<br/><span className="serif-accent">moves things.</span></h2></Reveal><Reveal className="heading-aside"><span className="aside-rule"/><p>A career shaped by <b>building, learning, and connecting the dots.</b></p></Reveal></div>
      <div className="timeline">
        <Reveal className="timeline-item current"><div className="timeline-rail"><span className="timeline-dot"/><span className="timeline-line"/></div><div className="timeline-date"><span>2025 — PRESENT</span><span className="current-tag"><i/> CURRENT</span></div><div className="timeline-content"><div className="company-heading"><div className="company-symbol ph-symbol">ph<span>.</span></div><div><h3>Programming Hero</h3><span className="company-type">Education technology · Community</span></div><span className="timeline-arrow"><ArrowUpRight size={19}/></span></div><div className="role-meta"><strong>Growth Executive</strong><span>Community & Growth</span></div><p>Contributing to student community development, campus engagement, educational initiatives, and career-focused programs—connecting technology learning with real opportunities.</p><ul className="impact-list"><li><b>2,500+</b> student connections</li><li><b>100+</b> campus communities reached</li><li><b>~100K BDT</b> revenue contribution through community initiatives</li></ul></div></Reveal>
        <Reveal className="timeline-item" delay={.06}><div className="timeline-rail"><span className="timeline-dot"/><span className="timeline-line"/></div><div className="timeline-date"><span>2025 — 2026</span><span>TECH LEADERSHIP</span></div><div className="timeline-content"><div className="company-heading"><div className="company-symbol jevxo-symbol">JX<span>.</span></div><div><h3>Jevxo</h3><span className="company-type">Technology & digital solutions</span></div><span className="timeline-arrow"><ArrowUpRight size={19}/></span></div><div className="role-meta"><strong>Chief Technology Officer (CTO)</strong><span>Engineering Leadership & Architecture</span></div><p>Spearheaded technical direction, architectural design, and software engineering strategy—guiding core products from design through high-performance implementation.</p><div className="mini-project-tags"><span>System Architecture</span><span>Technical Leadership</span><span>Product Engineering</span></div></div></Reveal>
        <Reveal className="timeline-item" delay={.1}><div className="timeline-rail"><span className="timeline-dot"/><span className="timeline-line"/></div><div className="timeline-date"><span>2023 — 2025</span><span>SOFTWARE INDUSTRY</span></div><div className="timeline-content"><div className="company-heading"><div className="company-symbol systech-symbol">S<span>/</span></div><div><h3>Systech Digital Limited</h3><span className="company-type">Software development</span></div><span className="timeline-arrow"><ArrowUpRight size={19}/></span></div><div className="role-meta"><strong>Software Engineer</strong><span>Engineering & Implementation</span></div><p>Worked on real-world development projects and practical technical problem-solving, collaborating on digital solutions for institutional and enterprise contexts.</p><div className="mini-project-tags"><span>BDRCS</span><span>FICCI</span><span>CTL Weather</span></div></div></Reveal>
        <Reveal className="timeline-item" delay={.14}><div className="timeline-rail"><span className="timeline-dot"/></div><div className="timeline-date"><span>2022 — 2023</span><span>FULL STACK ENGINEERING</span></div><div className="timeline-content"><div className="company-heading"><div className="company-symbol nexovia-symbol">NX<span>.</span></div><div><h3>Nexoviasoft</h3><span className="company-type">Software solutions · Web development</span></div><span className="timeline-arrow"><ArrowUpRight size={19}/></span></div><div className="role-meta"><strong>Full Stack Developer</strong><span>Full Stack Web Development</span></div><p>Engineered end-to-end web applications, built reusable frontend interfaces, developed backend application logic, and integrated responsive APIs and database workflows.</p><div className="mini-project-tags"><span>Full Stack</span><span>Frontend & Backend</span><span>API Integration</span></div></div></Reveal>
      </div>
    </div></section>

    <section className="section projects-section" id="projects"><div className="container"><div className="section-heading"><Reveal><span className="section-index">03 / SELECTED WORK</span><h2>Engineering<br/><span className="serif-accent">impact.</span></h2></Reveal><Reveal className="heading-aside"><span className="aside-rule"/><p>A few chapters from my work in <b>digital products and practical solutions.</b></p></Reveal></div>
      <div className="projects-grid">{projects.map((p,i)=><Reveal key={p.name} className="project-card" delay={i*.08}><a href={p.url} target="_blank" rel="noreferrer" className="project-art-link" aria-label={`Visit ${p.name} live website`}><div className="project-art"><img className="project-screenshot" src={p.image} alt={`${p.name} website preview`} loading="lazy"/><div className="project-art-overlay"/><div className="project-art-top"><span className="project-number">PROJECT / {p.n}</span><span className="project-live-tag"><i/> LIVE DEMO</span></div><span className="art-corner"><ArrowUpRight size={15}/></span></div></a><div className="project-body"><div className="project-type-row"><span className="project-type">{p.type}</span></div><div className="project-title-row"><a href={p.url} target="_blank" rel="noreferrer" className="project-title-link"><h3>{p.name}</h3><span className="project-open"><ArrowUpRight size={18}/></span></a></div><p>{p.desc}</p><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a href={p.url} target="_blank" rel="noreferrer" className="project-direct-cta">Visit live website <ArrowUpRight size={14}/></a></div></Reveal>)}</div><div className="projects-note"><span className="note-star">✳</span><p>Live websites captured in real-time. Click any card to explore the deployed platforms directly.</p></div>
    </div></section>

    <section className="section ventures-section" id="ventures"><div className="container"><div className="section-heading"><Reveal><span className="section-index">04 / BEYOND THE DAY JOB</span><h2>Building beyond<br/><span className="serif-accent">the code.</span></h2></Reveal><Reveal className="heading-aside"><span className="aside-rule"/><p>Entrepreneurship is another way to turn <b>ideas into something real.</b></p></Reveal></div>
      <div className="venture-grid"><Reveal className="venture-card venture-primary"><div className="venture-top"><span className="venture-label">VENTURE / 01</span><span className="venture-icon"><Code2 size={20}/></span></div><div className="venture-monogram">DC<span>.</span></div><div className="venture-bottom"><div><h3>Durdom Crafters</h3><span>Founder & Software Engineer</span></div><ArrowUpRight size={21}/></div><p>An entrepreneurial initiative focused on software engineering and digital product development—exploring how thoughtful technology can solve meaningful problems.</p><div className="venture-line"/></Reveal>
      <Reveal className="venture-card venture-secondary" delay={.12}><div className="venture-top"><span className="venture-label">VENTURE / 02</span><span className="venture-icon"><BriefcaseBusiness size={20}/></span></div><div className="venture-monogram studio-monogram">CS<span>.</span></div><div className="venture-bottom"><div><h3>Creatibuz Studio</h3><span>Co-Founder & COO</span></div><ArrowUpRight size={21}/></div><p>Working across startup operations, collaboration, product execution, and business development to help ideas progress from planning to delivery.</p><div className="venture-line"/></Reveal></div>
    </div></section>

    <section className="philosophy-section"><div className="container philosophy-inner"><Reveal><span className="section-index">A NOTE TO SELF</span><Sparkles className="philosophy-spark" size={25}/><h2>I believe great technology<br/>isn&apos;t just about <span className="serif-accent">writing code.</span></h2><p>It&apos;s about solving real problems, creating meaningful products, and building things that make an impact.</p><span className="signature">— Ovi</span></Reveal><div className="philosophy-orb" aria-hidden="true"><div/><div/><div/></div></div></section>

    <section className="section skills-section" id="skills"><div className="container"><div className="section-heading"><Reveal><span className="section-index">05 / THE TOOLKIT</span><h2>Built on curiosity.<br/><span className="serif-accent">Driven by craft.</span></h2></Reveal><Reveal className="heading-aside"><span className="aside-rule"/><p>A broad toolkit spanning <b>engineering, product, and people.</b></p></Reveal></div><div className="skills-grid">{skillGroups.map((g,i)=><Reveal className="skill-group" key={g.title} delay={i*.08}><div className="skill-group-top"><span>0{i+1}</span><ArrowUpRight size={16}/></div><h3>{g.title}</h3><p>{g.note}</p><div className="skill-chips">{g.items.map(s=><span key={s}>{s}</span>)}</div></Reveal>)}</div><p className="skills-footnote">This section highlights areas of experience and focus rather than self-assigned proficiency scores. Specific languages and frameworks can be added once confirmed.</p></div></section>

    <section className="contact-section section" id="contact"><div className="container"><Reveal className="contact-kicker"><span className="status-dot"/> OPEN TO MEANINGFUL COLLABORATION</Reveal><div className="contact-layout"><Reveal className="contact-main"><span className="section-index">06 / YOUR MOVE</span><h2>Have an idea?<br/>Let&apos;s build something<br/><span className="serif-accent">meaningful.</span></h2><p>Building a product, exploring a collaboration, or looking for an engineer who understands both technology and business? I&apos;d love to connect.</p><a className="button button-primary contact-button" href={mailto}>Start a conversation <ArrowUpRight size={17}/></a></Reveal><Reveal className="contact-details" delay={.12}><div className="contact-detail-label">GET IN TOUCH</div><a className="contact-row" href={mailto}><span className="contact-icon"><Mail size={18}/></span><span><small>EMAIL</small><strong>ashikurovi2003@gmail.com</strong></span><ArrowUpRight size={17}/></a><a className="contact-row" href="https://wa.me/8801581721893" target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle size={18}/></span><span><small>WHATSAPP</small><strong>+880 1581-721893</strong></span><ArrowUpRight size={17}/></a><div className="contact-detail-label social-label">ELSEWHERE ON THE INTERNET</div>{socials.map(s=><a key={s.label} className="social-row" href={s.href} target="_blank" rel="noreferrer"><span><s.icon size={16}/>{s.label}</span><ArrowUpRight size={15}/></a>)}</Reveal></div></div></section>

    <footer className="footer"><div className="container footer-top"><a href="#home" className="brand"><span className="brand-mark"><img src="/brand-icon.jpg" alt="Ovi brand emblem"/></span><span>ovi<span className="brand-dot">/</span>dev</span></a><span className="footer-motto">SOFTWARE ENGINEER · ENTREPRENEUR · PRODUCT BUILDER</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a></div><div className="container footer-bottom"><span>© {year} Ashikur Rahman Ovi. All rights reserved.</span><span>Designed with intent <span className="footer-heart">✳</span> Built for what&apos;s next.</span><span className="footer-location"><MapPin size={13}/> Bangladesh</span></div></footer>
  </main>;
}
