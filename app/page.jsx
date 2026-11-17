import { ArrowDown, ArrowUpRight, Instagram, Youtube, Music2, Menu } from "lucide-react";

const stories = [
  { number: "01", title: "THE BEGINNING", subtitle: "Une histoire qui ne s'arrête pas", type: "HISTORY", year: "2006" },
  { number: "02", title: "OUR CULTURE", subtitle: "More than a stand. A way of life.", type: "IDENTITY", year: "FOREVER" },
  { number: "03", title: "THE ARCHIVE", subtitle: "Every image carries a memory.", type: "MEMORIES", year: "2006—NOW" },
];

const media = [
  { title: "THE CURVA", category: "MATCHDAY / 2025", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1100&q=85" },
  { title: "ONE VOICE", category: "SUPPORT / 2024", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80" },
  { title: "OUR COLORS", category: "IDENTITY / 2023", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=85" },
];

function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}</div>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" aria-label="Crazyboys 2006 home">
          <span className="brand-mark">CB</span>
          <span className="brand-name">CRAZYBOYS<span>2006</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">THE STORY</a><a href="#culture">CULTURE</a><a href="#media">MEDIA</a><a href="#archive">ARCHIVE</a>
        </nav>
        <a className="header-cta" href="#contact">GET IN TOUCH <ArrowUpRight size={14} /></a>
        <button className="menu-button" aria-label="Open menu"><Menu size={22} /></button>
      </header>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="eyebrow"><span className="live-dot" /> EST. MMVI <i /> ONE PASSION. ONE FAMILY.</p>
          <h1>NO<br /><em>LIMITS.</em></h1>
          <div className="hero-bottom">
            <p className="hero-description">WE ARE THE VOICE.<br />WE ARE THE COLORS.<br /><strong>WE ARE CRAZYBOYS.</strong></p>
            <a className="scroll-link" href="#story"><span>SCROLL TO EXPLORE</span><ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-index">UCB06 <span>—</span> 01 / 04</div>
        <div className="hero-side">LA JEUNESSE EST UNE FORCE</div>
      </section>

      <section className="manifesto" id="story">
        <div className="manifesto-top"><SectionLabel>01 / WHO WE ARE</SectionLabel><span>منذ 2006 — إلى الأبد</span></div>
        <div className="manifesto-grid">
          <h2>NOT JUST<br />A <span>GROUP.</span><br />A WAY OF LIFE.</h2>
          <div className="manifesto-copy">
            <p className="big-copy">Since 2006, one thing has never changed: <span>our devotion.</span></p>
            <p>Built on loyalty, brotherhood and an unconditional love for our colors. Crazyboys 2006 is a story written together, carried from generation to generation, inside and beyond the stands.</p>
            <a className="text-link" href="#culture">DISCOVER OUR STORY <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="manifesto-stamp">CB<br /><small>06</small></div>
      </section>

      <section className="culture" id="culture">
        <div className="culture-heading"><SectionLabel>02 / OUR DNA</SectionLabel><p>THE VALUES THAT<br /><span>DEFINE US.</span></p></div>
        <div className="story-list">
          {stories.map((story) => (
            <a className="story-row" href="#archive" key={story.number}>
              <span className="story-number">{story.number}</span>
              <div className="story-title"><h3>{story.title}</h3><p>{story.subtitle}</p></div>
              <span className="story-type">{story.type}</span>
              <span className="story-year">{story.year}</span>
              <span className="story-arrow"><ArrowUpRight size={22} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="media-section" id="media">
        <div className="media-heading"><SectionLabel>03 / IN FRAMES</SectionLabel><div><h2>MEMORIES<br /><span>NEVER FADE.</span></h2><p>A living archive of our passion.</p></div></div>
        <div className="media-grid">
          {media.map((item, index) => (
            <a className={`media-card media-card-${index + 1}`} href="#archive" key={item.title}>
              <div className="media-photo" style={{ backgroundImage: `url("${item.image}")` }} />
              <span className="media-count">0{index + 1} / 03</span>
              <div className="media-card-info"><span>{item.category}</span><h3>{item.title}</h3><ArrowUpRight size={20} /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="quote-section" id="archive">
        <div className="quote-mark">“</div>
        <p>THE STANDS ARE OUR HOME.<br />THE COLORS ARE <span>OUR STORY.</span></p>
        <div className="quote-bottom"><span>CRAZYBOYS 2006</span><span>LA PASSION N'A PAS DE FIN.</span></div>
      </section>

      <footer id="contact">
        <div className="footer-top"><div><span className="footer-kicker">THE STORY CONTINUES</span><h2>ALWAYS<br /><span>UNITED.</span></h2></div><a className="back-top" href="#">BACK TO TOP <ArrowUpRight size={18} /></a></div>
        <div className="footer-bottom">
          <a className="brand footer-brand" href="#"><span className="brand-mark">CB</span><span className="brand-name">CRAZYBOYS<span>2006</span></span></a>
          <p>ONE PASSION. ONE FAMILY. SINCE 2006.</p>
          <div className="socials"><a href="#" aria-label="Instagram"><Instagram size={18} /></a><a href="#" aria-label="YouTube"><Youtube size={18} /></a><a href="#" aria-label="Music"><Music2 size={18} /></a></div>
          <span className="copyright">© UCB06 — ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </main>
  );
}
