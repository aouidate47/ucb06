import { ArrowDown, ArrowUpRight, Youtube, Instagram, Facebook, Music2, Menu } from "lucide-react";

const archiveImages = [
  { title: "CURVA MITICA", category: "THE STAND / ARCHIVE", image: "https://ucb2006.wordpress.com/wp-content/uploads/2012/03/kacm1.jpg" },
  { title: "THE CURVA SUD", category: "EL HARTI / ARCHIVE", image: "https://ucb2006.wordpress.com/wp-content/uploads/2012/03/420809_254514171291500_102388293170756_541027_1778229756_n.jpg" },
  { title: "CB06 IDENTITY", category: "GROUP / ARCHIVE", image: "https://ucb2006.wordpress.com/wp-content/uploads/2012/03/901513856qi3.jpg" },
  { title: "THE SCARF", category: "GROUP MATERIAL / 2012", image: "https://ucb2006.wordpress.com/wp-content/uploads/2012/03/378277_273217379421179_102388293170756_585530_881783711_n.jpg" },
];

const milestones = [
  { year: "25.12.2006", title: "THE BEGINNING", text: "Ultras Crazy Boys is founded in Marrakech to stand behind Kawkab Athletic Club, home and away." },
  { year: "THE CURVA SUD", title: "EL HARTI", text: "The group's historic place in the stands was the Virage Sud at Stade El Harti." },
  { year: "THE YEARS", title: "TIFOS & ANIMATIONS", text: "Flags, large-scale displays and the visual language of the stands became part of the group's story." },
  { year: "2012", title: "THE ARCHIVE", text: "Old group publications documented trips, scarves, the curva and the life around KACM." },
];

function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}</div>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" aria-label="Crazyboys 2006 home">
          <img className="brand-logo" src="https://ucb2006.wordpress.com/wp-content/uploads/2012/03/cropped-180017_112936392115946_102388293170756_94706_1772312_n12.jpg" alt="Crazyboys 2006 emblem" />
          <span className="brand-name">CRAZYBOYS<span>2006</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">THE STORY</a><a href="#culture">OUR ROOTS</a><a href="#legacy">OUR LEGACY</a><a href="#media">ARCHIVE</a><a href="#videos">UCB06 VIDEO</a><a href="#contact">FOLLOW</a>
        </nav>
        <a className="header-cta" href="https://ucb2006.wordpress.com/" target="_blank" rel="noreferrer">OLD ARCHIVE <ArrowUpRight size={14} /></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><Menu size={23} /></summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#story">THE STORY</a>
            <a href="#culture">OUR ROOTS</a>
            <a href="#legacy">OUR LEGACY</a>
            <a href="#media">ARCHIVE</a>
            <a href="#videos">KACM VIDEO</a>
            <a href="#contact">FOLLOW</a>
            <a href="https://ucb2006.wordpress.com/" target="_blank" rel="noreferrer">OLD ARCHIVE <ArrowUpRight size={14} /></a>
          </nav>
        </details>
      </header>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="eyebrow"><span className="live-dot" /> MARRAKECH · EST. 2006 <i /> KACM</p>
          <h1>ULTRAS<br /><em>CRAZY.</em></h1>
          <div className="hero-bottom">
            <p className="hero-description">ONE CITY.<br />ONE CLUB.<br /><strong>ONE UNCONDITIONAL PASSION.</strong></p>
            <a className="scroll-link" href="#story"><span>DISCOVER OUR STORY</span><ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-index">UCB06 <span>—</span> MARRAKECH / MOROCCO</div>
        <div className="hero-side">ULTRAS CRAZY BOYS 2006</div>
      </section>

      <section className="manifesto" id="story">
        <div className="manifesto-top"><SectionLabel>01 / WHO WE ARE</SectionLabel><span>منذ 2006 — ديما كوكب</span></div>
        <div className="manifesto-grid">
          <h2>BUILT ON<br /><span>LOYALTY.</span><br />BOUND BY COLORS.</h2>
          <div className="manifesto-copy">
            <p className="big-copy">25 December 2006. <span>A story begins in Marrakech.</span></p>
            <p>Ultras Crazy Boys (UCB) was founded to support Kawkab Athletic Club of Marrakech, at home and away. More than a matchday presence, the group built its identity around loyalty, collective commitment and the culture of the curva.</p>
            <a className="text-link" href="https://ucb2006.wordpress.com/2012/03/23/historique-du-groupe-ultras-crazy-boys/" target="_blank" rel="noreferrer">READ THE ORIGINAL HISTORY <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="manifesto-stamp">UCB<br /><small>06</small></div>
      </section>

      <section className="culture" id="culture">
        <div className="culture-heading"><SectionLabel>02 / OUR HISTORY</SectionLabel><p>FROM THE CITY.<br /><span>FOR THE CLUB.</span></p></div>
        <div className="story-list">
          {milestones.map((item, index) => (
            <article className="story-row" key={item.year}>
              <span className="story-number">0{index + 1}</span>
              <div className="story-title"><h3>{item.title}</h3><p>{item.text}</p></div>
              <span className="story-type">{item.year}</span>
              <span className="story-year">UCB06</span>
              <span className="story-arrow"><ArrowUpRight size={22} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="legacy-section" id="legacy">
        <div className="legacy-topline"><SectionLabel>03 / A RECORD OF THE CURVA</SectionLabel><span>CRAZY BOYS 2006 · MARRAKECH</span></div>
        <div className="legacy-title"><p>MORE THAN A BANNER.<br /><span>A PIECE OF HISTORY.</span></p></div>
        <div className="legacy-grid">
          <article className="legacy-card legacy-card-africa">
            <span className="legacy-number">01</span>
            <p className="legacy-kicker">ACROSS THE CONTINENT</p>
            <h3>THE LONGEST<br /><em>ULTRAS BÂCHE</em><br />IN AFRICA.</h3>
            <span className="legacy-caption">A STATEMENT OF THE CURVA · UCB06</span>
          </article>
          <article className="legacy-card legacy-card-morocco">
            <span className="legacy-number">02</span>
            <p className="legacy-kicker">ON THE ROAD</p>
            <h3>MOROCCO'S OLDEST<br /><em>AWAY-TRAVEL</em><br />BÂCHE.</h3>
            <span className="legacy-caption">THE ROAD IS PART OF OUR STORY</span>
          </article>
        </div>
        <p className="legacy-footnote">TWO BANNERS. ONE HISTORY. ALWAYS UCB06.</p>
      </section>

      <section className="media-section" id="media">
        <div className="media-heading"><SectionLabel>03 / THE ARCHIVE</SectionLabel><div><h2>MEMORIES<br /><span>FROM THE CURVA.</span></h2><p>Historical photographs and material from the group's public archive.</p></div></div>
        <div className="media-grid">
          {archiveImages.slice(0, 3).map((item, index) => (
            <a className={`media-card media-card-${index + 1}`} href="https://ucb2006.wordpress.com/" target="_blank" rel="noreferrer" key={item.title}>
              <div className="media-photo" style={{ backgroundImage: `url("${item.image}")` }} />
              <span className="media-count">0{index + 1} / 03</span>
              <div className="media-card-info"><span>{item.category}</span><h3>{item.title}</h3><ArrowUpRight size={20} /></div>
            </a>
          ))}
        </div>
        <div className="archive-link-wrap"><a className="text-link" href="https://ucb2006.wordpress.com/" target="_blank" rel="noreferrer">EXPLORE THE ORIGINAL UCB06 ARCHIVE <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="youtube-section" id="videos">
        <div className="youtube-heading">
          <SectionLabel>05 / THE ULTRAS CHANNEL</SectionLabel>
          <div>
            <h2>THE LATEST<br /><span>FROM UCB06.</span></h2>
            <p>The latest videos from the official Ultras Crazy Boys 2006 channel.</p>
          </div>
        </div>
        <a className="youtube-frame" href="https://www.youtube.com/@theucb06/videos" target="_blank" rel="noreferrer" aria-label="Open the latest UCB06 videos on YouTube">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=UUFYI5fxpWCf8c5MYIgeSuFw"
            title="Latest uploads from Ultras Crazy Boys 2006"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <span className="youtube-overlay"><Youtube size={34} /><b>WATCH ON YOUTUBE</b><ArrowUpRight size={20} /></span>
        </a>
        <div className="youtube-bottom"><span>KAWKAB ATHLETIC CLUB DE MARRAKECH</span><a href="https://www.youtube.com/@Kawkab_marrakech-47/videos" target="_blank" rel="noreferrer">VIEW OFFICIAL CHANNEL <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="spotify-section" id="music">
        <div className="spotify-heading">
          <SectionLabel>06 / THE SOUND OF THE CURVA</SectionLabel>
          <div>
            <h2>THE SOUND<br /><span>OF UCB06.</span></h2>
            <p>Listen to the music and releases connected to Crazyboys 2006.</p>
          </div>
        </div>
        <div className="spotify-card">
          <div className="spotify-card-top">
            <span className="spotify-brand"><Music2 size={20} /> SPOTIFY</span>
            <span className="spotify-caption">LISTEN · FOLLOW · DISCOVER</span>
          </div>
          <iframe
            src="https://open.spotify.com/embed/artist/1sDw2xw1gleNlPECJOS8dQ?utm_source=generator&theme=0"
            title="Crazyboys 2006 on Spotify"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <a className="spotify-open" href="https://open.spotify.com/artist/1sDw2xw1gleNlPECJOS8dQ" target="_blank" rel="noreferrer">OPEN ON SPOTIFY <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="quote-section" id="archive">
        <div className="quote-mark">“</div>
        <p>OUR CITY. OUR CLUB.<br />OUR <span>UNBREAKABLE</span> BOND.</p>
        <div className="quote-bottom"><span>ULTRAS CRAZY BOYS 2006</span><span>MARRAKECH · MOROCCO</span></div>
      </section>

      <footer id="contact">
        <div className="footer-top"><div><span className="footer-kicker">THE CURVA IS OUR HOME</span><h2>ALWAYS<br /><span>UCB06.</span></h2></div><a className="back-top" href="#">BACK TO TOP <ArrowUpRight size={18} /></a></div>
        <div className="footer-bottom">
          <a className="brand footer-brand" href="#"><img className="brand-logo" src="https://ucb2006.wordpress.com/wp-content/uploads/2012/03/cropped-180017_112936392115946_102388293170756_94706_1772312_n12.jpg" alt="Crazyboys 2006 emblem" /><span className="brand-name">CRAZYBOYS<span>2006</span></span></a>
          <p>ONE CITY. ONE CLUB. SINCE 2006.</p>
          <div className="socials">
            <a href="https://youtube.com/@theucb06" target="_blank" rel="noreferrer" aria-label="Crazyboys 2006 on YouTube"><Youtube size={18} /></a>
            <a href="https://www.instagram.com/ucb06_" target="_blank" rel="noreferrer" aria-label="Crazyboys 2006 on Instagram"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/share/1CjqFyPmrd/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Crazyboys 2006 on Facebook"><Facebook size={18} /></a>
            <a href="https://open.spotify.com/artist/1sDw2xw1gleNlPECJOS8dQ" target="_blank" rel="noreferrer" aria-label="Crazyboys 2006 on Spotify"><Music2 size={18} /></a>
          </div>
          <span className="copyright">© UCB06 — ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </main>
  );
}
