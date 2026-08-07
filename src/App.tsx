import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Download,
  FileText,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Monitor,
  Palette,
  Play,
  Quote,
  Sparkles,
  Star,
  Video,
  X,
} from 'lucide-react';

type Page = 'home' | 'about' | 'portfolio' | 'resume' | 'contact';

const navItems: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'resume', label: 'Resume / CV' },
  { id: 'contact', label: 'Contact' },
];

const services = [
  { icon: Palette, title: 'Adobe Photoshop', text: 'Campaign visuals, retouching, composites and polished brand assets.' },
  { icon: Layers3, title: 'Office Design', text: 'Clear, professional Word, Excel and PowerPoint documents that work.' },
  { icon: FileText, title: 'Resume & Portfolio', text: 'Stand-out career documents designed to make your next opportunity easier.' },
  { icon: Sparkles, title: 'AI Photo Editing', text: 'Thoughtful AI-enhanced visuals with a refined, realistic finish.' },
  { icon: Video, title: 'Video Editing', text: 'Short-form content and edits that hold attention from the first frame.' },
  { icon: Monitor, title: 'Digital Experiences', text: 'Modern visual systems for personal brands, products and services.' },
];

const projects = [
  { title: 'Business Proposal', type: 'Microsoft Word', crop: '0% 0%' },
  { title: 'Financial Dashboard', type: 'Microsoft Excel', crop: '25% 0%' },
  { title: 'Company Presentation', type: 'PowerPoint', crop: '50% 0%' },
  { title: 'Social Media Design', type: 'Photoshop', crop: '75% 0%' },
  { title: 'AI Product Campaign', type: 'AI Photo Editing', crop: '100% 0%' },
  { title: 'Resume & Cover Letter', type: 'Word + Photoshop', crop: '0% 100%' },
  { title: 'Restaurant Menu', type: 'Photoshop', crop: '25% 100%' },
  { title: 'Sales Tracker', type: 'Microsoft Excel', crop: '50% 100%' },
  { title: 'Travel Poster Collection', type: 'AI Photo Editing', crop: '75% 100%' },
  { title: 'Portfolio Website UI', type: 'Digital Design', crop: '100% 100%' },
];

const testimonials = [
  { quote: 'Hadi understood the brief instantly and delivered a visual identity that felt far more premium than we expected.', name: 'Ayesha Khan', role: 'Founder, Studio North' },
  { quote: 'The dashboard is beautifully organized and genuinely easy to use. Every detail feels considered.', name: 'Hamza R.', role: 'Operations Lead' },
  { quote: 'My new resume finally feels like me: confident, clear and impossible to overlook.', name: 'Sara Malik', role: 'Marketing Specialist' },
];

function goTo(page: Page) {
  window.location.hash = page === 'home' ? '' : page;
}

function usePage(): Page {
  const getPage = (): Page => {
    const value = window.location.hash.replace('#', '') as Page;
    return navItems.some((item) => item.id === value) ? value : 'home';
  };
  const [page, setPage] = useState<Page>(getPage);
  useEffect(() => {
    const handleHash = () => setPage(getPage());
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
  return page;
}

function Button({ children, onClick, secondary = false, href }: { children: ReactNode; onClick?: () => void; secondary?: boolean; href?: string }) {
  const className = `button ${secondary ? 'button-secondary' : 'button-primary'}`;
  if (href) return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowRight size={16} /></a>;
  return <button className={className} onClick={onClick}>{children}<ArrowRight size={16} /></button>;
}

function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{text}</p></section>;
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  return <article className="project-card">
    <div className="project-image" style={{ backgroundPosition: project.crop }}><span className="project-number">0{index + 1}</span><span className="project-open"><ArrowRight size={18} /></span></div>
    <div className="project-copy"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3></div>
  </article>;
}

function Home() {
  return <>
    <section className="hero section-shell">
      <div className="hero-copy reveal"><p className="eyebrow">Creative freelancer · Pakistan</p><h1>I turn ideas into <em>visual impact.</em></h1><p className="hero-text">I’m Hadi Malik — a multidisciplinary designer helping ambitious people and brands look as good as they think.</p><div className="hero-actions"><Button onClick={() => goTo('portfolio')}>Explore my work</Button><Button secondary onClick={() => goTo('contact')}>Start a project</Button></div><div className="hero-proof"><div className="avatars"><span>H</span><span>M</span><span>+</span></div><p><strong>10+ projects</strong><br />crafted with care</p></div></div>
      <div className="hero-visual reveal"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="portrait-frame"><div className="portrait-glow" /><img src="/images/hadi.jpg" alt="Hadi Malik" /><div className="portrait-tag"><span>HM</span><div><strong>Hadi Malik</strong><small>Designer & editor</small></div></div></div><div className="available-box"><span className="status-dot" /> <b>*</b> Available for work</div><div className="quote-card"><Quote size={18} /><span>Good design<br /><strong>is not just seen.</strong><br />It is felt.</span></div></div>
    </section>
    <section className="marquee"><div>PHOTOSHOP <i>✦</i> EXCEL <i>✦</i> WORD <i>✦</i> POWERPOINT <i>✦</i> PHOTO EDITING <i>✦</i> VIDEO <i>✦</i></div></section>
    <section className="section-shell section-space"><div className="section-heading"><div><p className="eyebrow">What I do</p><h2>Design that does<br /><em>the talking.</em></h2></div><p className="section-note">From the first sketch to the final export, I combine clarity, creativity and a sharp eye for detail.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><service.icon size={25} /><h3>{service.title}</h3><p>{service.text}</p><button onClick={() => goTo('contact')}>Learn more <ChevronRight size={15} /></button></article>)}</div></section>
    <section className="section-shell section-space work-preview"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>A glimpse into<br /><em>the studio.</em></h2></div><Button secondary onClick={() => goTo('portfolio')}>View all projects</Button></div><div className="project-grid featured-grid">{projects.slice(0, 5).map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></section>
    <section className="testimonial-section section-shell"><div className="testimonial-intro"><p className="eyebrow">Client words</p><h2>Made with trust.<br /><em>Remembered for quality.</em></h2><div className="rating"><span>{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={15} fill="currentColor" />)}</span><strong>5.0</strong><small>from happy clients</small></div></div><div className="testimonial-list">{testimonials.map((item) => <blockquote key={item.name}><Quote size={22} /><p>“{item.quote}”</p><footer><strong>{item.name}</strong><small>{item.role}</small></footer></blockquote>)}</div></section>
    <CTA />
  </>;
}

function About() {
  return <><PageIntro eyebrow="A little about me" title={<>Creative thinking.<br /><em>Precise execution.</em></>} text="I help people turn rough ideas into work they are proud to put in front of the world." /><section className="section-shell about-grid"><div className="about-photo"><img src="/images/hadi.jpg" alt="Hadi Malik portrait" /><span>01 / 03</span></div><div className="about-copy"><p className="eyebrow">The person behind the pixels</p><h2>Design is my way of making an impression <em>last.</em></h2><p>Hi, I’m Hadi. I’m a freelance designer and editor who loves making complex things feel simple, useful and beautifully put together.</p><p>Whether I’m building a financial dashboard in Excel, shaping a resume, retouching a portrait or editing a video, I bring the same mindset: listen closely, think clearly and sweat the details.</p><div className="stat-row"><div><strong>10+</strong><span>Projects delivered</span></div><div><strong>09</strong><span>Creative skills</span></div><div><strong>100%</strong><span>Care & commitment</span></div></div><Button onClick={() => goTo('contact')}>Let’s work together</Button></div></section><section className="values-section section-shell"><div><p className="eyebrow">How I work</p><h2>A simple process.<br /><em>Thoughtful results.</em></h2></div><div className="process-list"><div><b>01</b><h3>Listen & understand</h3><p>Every strong project starts with knowing what matters to you and your audience.</p></div><div><b>02</b><h3>Shape the direction</h3><p>I turn the brief into a focused visual direction with purpose behind every choice.</p></div><div><b>03</b><h3>Polish the details</h3><p>Then comes the craft: refining, testing and finishing until it feels just right.</p></div></div></section><CTA /></>;
}

function Portfolio() {
  return <><PageIntro eyebrow="Selected work" title={<>A collection of work<br /><em>with intention.</em></>} text="A closer look at the documents, visuals and digital experiences I’ve created for thoughtful brands and people." /><section className="section-shell"><div className="portfolio-toolbar"><span>10 projects</span><div><button className="filter-active">All work</button><button>Design</button><button>Editing</button></div></div><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></section><CTA /></>;
}

function Resume() {
  const skills = ['Adobe Photoshop', 'Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Resume Design', 'Photo Editing', 'AI Photo Editing', 'Video Editing'];
  return <><PageIntro eyebrow="Experience & capabilities" title={<>The skills behind<br /><em>the work.</em></>} text="A snapshot of the tools I use, the work I care about and the value I bring to every project." /><section className="section-shell resume-layout"><div className="resume-main"><div className="resume-block"><div className="resume-block-title"><p className="eyebrow">Profile</p><h2>Multidisciplinary by nature.</h2></div><p>I’m a creative freelancer focused on visual communication — from polished career documents and business presentations to engaging social content, photo edits and video.</p></div><div className="resume-block"><div className="resume-block-title"><p className="eyebrow">Selected experience</p></div><div className="timeline"><div><span>2023 — Present</span><h3>Independent Creative Freelancer</h3><p>Designing practical, high-quality visual work for entrepreneurs, professionals and growing businesses.</p></div><div><span>Always learning</span><h3>Creative tools & new possibilities</h3><p>Exploring modern workflows, AI-assisted editing and new ways to make everyday communication more compelling.</p></div></div></div></div><aside className="resume-side"><div className="skill-card"><p className="eyebrow">Core skills</p><div className="skill-list">{skills.map((skill) => <span key={skill}><Check size={14} />{skill}</span>)}</div></div><div className="resume-download"><FileText size={25} /><h3>Want the full story?</h3><p>Download my resume for a closer look at my experience and capabilities.</p><Button href="/images/portfolio/WhatsApp_Image_2026-07-19_at_8.36.48_PM.jpeg" secondary>Download CV</Button></div></aside></section><CTA /></>;
}

function Contact() {
  return <><PageIntro eyebrow="Let’s make something" title={<>Have a project<br /><em>in mind?</em></>} text="Tell me a little about what you’re working on and I’ll get back to you with the next step." /><section className="section-shell contact-layout"><div className="contact-info"><p className="eyebrow">Reach out directly</p><h2>Good conversations<br />make great work.</h2><a href="mailto:hadi23malik" className="contact-link"><Mail size={20} /><span><small>Email me</small>hadi23malik</span><ArrowRight size={18} /></a><a href="https://wa.me/923238400840" target="_blank" rel="noreferrer" className="contact-link"><MessageCircle size={20} /><span><small>WhatsApp</small>+92 323 8400840</span><ArrowRight size={18} /></a><div className="contact-note"><span className="status-dot" /><p>Usually replies within 24 hours<br /><small>Monday — Saturday · 10am — 7pm</small></p></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); window.open('https://wa.me/923238400840', '_blank'); }}><label>Your name<input required placeholder="What should I call you?" /></label><label>Your email<input required type="email" placeholder="Where can I reach you?" /></label><label>Tell me about your project<textarea required rows={4} placeholder="A few words about what you need..." /></label><button className="button button-primary" type="submit">Send enquiry <ArrowRight size={16} /></button></form></section><section className="pricing-section section-shell"><div><p className="eyebrow">Simple starting points</p><h2>Choose your<br /><em>starting point.</em></h2></div><div className="pricing-grid"><div className="price-card"><span>01</span><h3>Essentials</h3><p>For one focused design deliverable.</p><strong>Starting at <b>$25</b></strong><button onClick={() => goTo('contact')}>Discuss a project <ArrowRight size={16} /></button></div><div className="price-card featured-price"><span>02 · Most popular</span><h3>Complete</h3><p>For a set of connected visuals or documents.</p><strong>Starting at <b>$75</b></strong><button onClick={() => goTo('contact')}>Discuss a project <ArrowRight size={16} /></button></div><div className="price-card"><span>03</span><h3>Custom</h3><p>For a larger brief that needs a tailored plan.</p><strong>Let’s talk</strong><button onClick={() => goTo('contact')}>Discuss a project <ArrowRight size={16} /></button></div></div></section></>;
}

function CTA() { return <section className="cta section-shell"><div><p className="eyebrow">Have an idea?</p><h2>Let’s turn it into<br /><em>something real.</em></h2></div><Button onClick={() => goTo('contact')}>Start a conversation</Button></section>; }

function App() {
  const page = usePage();
  const [menuOpen, setMenuOpen] = useState(false);
  const content: Record<Page, ReactNode> = { home: <Home />, about: <About />, portfolio: <Portfolio />, resume: <Resume />, contact: <Contact /> };
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }, [page]);
  return <div className="app-shell"><header className="navbar"><button className="brand" onClick={() => goTo('home')}><span>HM</span><strong>Hadi Malik<small>Creative freelancer</small></strong></button><nav className={menuOpen ? 'nav-open' : ''}>{navItems.map((item) => <button key={item.id} className={page === item.id ? 'active' : ''} onClick={() => goTo(item.id)}>{item.label}</button>)}<Button onClick={() => goTo('contact')}>Let’s talk</Button></nav><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></header><main>{content[page]}</main><footer className="footer section-shell"><div className="brand footer-brand"><span>HM</span><strong>Hadi Malik<small>Creative freelancer</small></strong></div><p>© 2025 Hadi Malik. Built with care and a little bit of gold.</p><div className="footer-links"><button onClick={() => goTo('portfolio')}>Portfolio</button><button onClick={() => goTo('contact')}>Contact</button><a href="https://wa.me/923238400840" target="_blank" rel="noreferrer"><MessageCircle size={17} /></a></div></footer><a className="whatsapp" href="https://wa.me/923238400840" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={23} /></a></div>;
}

export default App;
