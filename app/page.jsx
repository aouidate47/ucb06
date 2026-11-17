import { ArrowDown, ArrowUpRight, Youtube, Instagram, Facebook, Music2, Menu } from "lucide-react";
import HeroVideo from "./components/HeroVideo";

const archiveImages = [
  { title: "CURVA MITICA", category: "THE STAND / ARCHIVE", image: "https://ucb2006.wordpress.com/wp-content/uploads/2012/03/kacm1.jpg" },
  { title: "THE CURVA SUD", category: "EL HARTI / ARCHIVE", image: "https://ucb2006.wordpress.com/wp-content/uploads/2012/03/420809_254514171291500_102388293170756_541027_1778229756_n.jpg" },
  { title: "CB06 IDENTITY", category: "GROUP / ARCHIVE", image: "https://ucb2006.wordpress.com/wp-content/uploads/2012/03/901513856qi3.jpg" },
  { title: "THE SCARF", category: "GROUP MATERIAL / 2012", image: "https://ucb2006.wordpress.com/wp-content/uploads/2012/03/378277_273217379421179_102388293170756_585530_881783711_n.jpg" },
];

const covers = [
  { image: "/images/cover1.jpg", alt: "Crazy Boys 2006 ultras with red flares behind the Crazy Boys banner" },
  { image: "/images/cover2.jpg", alt: "UCB06 ultras in the curva beneath the group's banner" },
  { image: "/images/cover3.jpg", alt: "Ultras Crazy Boys 2006 banner across the El Harti stand" },
  { image: "/images/cover4.png", alt: "Born to Win banner held by UCB06 members at sunset" },
  { image: archiveImages[0].image, alt: "Historic UCB06 archive photograph from the curva" },
  { image: archiveImages[1].image, alt: "UCB06 archive photograph of the Curva Sud" },
];

const milestones = [
  { year: "25.12.2006", title: "THE BEGINNING", text: "Ultras Crazy Boys is founded in Marrakech to stand behind Kawkab Athletic Club, home and away." },
  { year: "THE CURVA SUD", title: "EL HARTI", text: "The group's historic place in the stands was the Virage Sud at Stade El Harti." },
  { year: "THE YEARS", title: "TIFOS & ANIMATIONS", text: "Flags, large-scale displays and the visual language of the stands became part of the group's story." },
  { year: "2012", title: "THE ARCHIVE", text: "Old group publications documented trips, scarves, the curva and the life around KACM." },
];

const matchdayRituals = [
  { number: "01", title: "THE GATHERING", tag: "BEFORE KICK-OFF", text: "The city starts to move toward the ground. Familiar faces meet, colours come out and the matchday takes shape." },
  { number: "02", title: "THE FIRST VOICE", tag: "THE STAND WAKES UP", text: "One voice becomes many. The curva finds its rhythm and the support does not wait for the score." },
  { number: "03", title: "THE DISPLAY", tag: "COLOUR IN THE AIR", text: "Flags, banners and choreography turn the stand into a statement that can be seen as well as heard." },
  { number: "04", title: "THE LAST MINUTE", tag: "UNTIL THE END", text: "Whatever happens on the pitch, the commitment is measured across the whole match — not just the result." },
];
function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}</div>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" aria-label="Crazyboys 2006 home">
          <img className="brand-logo" src="/images/logo.png" alt="Crazyboys 2006 emblem" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">THE STORY</a><a href="#culture">OUR ROOTS</a><a href="#rituals">MATCHDAY</a><a href="#legacy">OUR LEGACY</a><a href="#media">ARCHIVE</a><a href="#videos">UCB06 VIDEO</a><a href="#contact">FOLLOW</a>
        </nav>
        <a className="header-cta" href="https://ucb2006.wordpress.com/" target="_blank" rel="noreferrer">OLD ARCHIVE <ArrowUpRight size={14} /></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><Menu size={23} /></summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#story">THE STORY</a>
            <a href="#culture">OUR ROOTS</a>
            <a href="#rituals">MATCHDAY</a>
            <a href="#legacy">OUR LEGACY</a>
            <a href="#media">ARCHIVE</a>
            <a href="#videos">KACM VIDEO</a>
            <a href="#contact">FOLLOW</a>
            <a href="https://ucb2006.wordpress.com/" target="_blank" rel="noreferrer">OLD ARCHIVE <ArrowUpRight size={14} /></a>
          </nav>
        </details>
      </header>

      <section className="hero">
        <HeroVideo />
        <div className="hero-grain" />
        <div className="hero-content">
          <div className="hero-bottom">
          </div>
        </div>
        <div className="hero-side">Ultras crazy boys 2006</div>
      </section>

      <section className="manifesto" id="story">
        <img className="story-tagline" src="/images/story-begins-marrakech.svg" alt="25 December 2006. A story begins in Marrakech." />
        <div className="manifesto-grid">
          <div className="cover-stack cover-stack-left">
            {covers.slice(0, 3).map((item, index) => (
              <div className="cover-slot" key={item.image}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="cover-index">0{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="manifesto-copy">
            <p>Ultras Crazy Boys was born in the stands of Marrakech on a winter night in 2006, 
              when a handful of young supporters decided that following Kawkab was not a pastime but a duty.
               From the very first matchday the group took its place behind the goal, 
               turning the Virage Sud at Stade El Harti into a home of flags, 
               songs and color.</p>
            <p>Two decades later the name still means one thing: presence.
               Home or away, in the noise of a derby or the silence of a long season, 
               UCB06 stands with the club, protects its colors and passes the culture of the curva from one generation to the next.
                The banners grew bigger and the faces changed, but the loyalty never did.</p>
            <a className="text-link" href="https://ucb2006.wordpress.com/2012/03/23/historique-du-groupe-ultras-crazy-boys/" target="_blank" rel="noreferrer">READ THE ORIGINAL HISTORY <ArrowUpRight size={16} /></a>
          </div>
          <div className="cover-stack cover-stack-right">
            {covers.slice(3).map((item, index) => (
              <div className="cover-slot" key={item.image}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="cover-index">0{index + 4}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="manifesto-stamp">UCB<br /><small>06</small></div>
      </section>
      <div className="section-blend blend-ink-culture" aria-hidden="true" />

      <section className="culture" id="culture">
        <div className="culture-heading"><p>FROM THE CITY.<br /><span>FOR THE CLUB.</span></p></div>
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
      <div className="section-blend blend-culture-red" aria-hidden="true" />

      <section className="rituals-section" id="rituals">
        <div className="rituals-head">
          
          <div className="rituals-title">
            <p className="rituals-overline">NOT JUST 90 MINUTES.</p>
            <h2>THIS IS HOW<br /><span>WE LIVE IT.</span></h2>
          </div>
          <p className="rituals-intro">A matchday is built from moments. The walk, the voices, the colours and the loyalty that stays after the final whistle.</p>
        </div>
        <div className="stadium-bowl">
          <img className="stadium-photo" src="/images/el-harti-stadium.jpg" alt="Stade El Harti in Marrakech, with its running track and red and blue stands" />
          <div className="stadium-image-shade" aria-hidden="true" />
          <div className="stadium-pitch-overlay">
            <div className="rituals-carousel" aria-label="Matchday culture cards. Swipe horizontally to explore all four moments.">
              <div className="rituals-track">
                {matchdayRituals.map((item, index) => (
                  <article className={"ritual-card ritual-card-" + (index + 1)} key={item.number}>
                    <div className="ritual-card-top"><span>{item.number}</span><span>{item.tag}</span></div>
                    <div className="ritual-graphic" aria-hidden="true"><span>{item.number}</span></div>
                    <div className="ritual-card-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
                    <span className="ritual-card-line" />
                  </article>
                ))}
              </div>
            </div>
            <div className="stadium-swipe-note"><span>01 — 04</span><span>SWIPE TO EXPLORE</span><span>UCB06</span></div>
          </div>
        </div>
        <div className="rituals-footer"><span>HOME OR AWAY</span><span>ONE COLOUR. ONE CITY. ONE CURVA.</span><span>UCB06 / MARRAKECH</span></div>
      </section>
      <div className="section-blend blend-red-gold" aria-hidden="true" />
      <section className="legacy-section" id="legacy">
        <div className="legacy-topline">
          <span>CRAZY BOYS 2006 · MARRAKECH</span>
          <span>EST. 25 DECEMBER 2006</span>
        </div>
        <div className="legacy-title">
          <p>MORE THAN A BANNER.<br /><span>A PIECE OF HISTORY.</span></p>
          <p className="legacy-subtitle">A mark of identity. A symbol carried across generations, stands and roads.</p>
        </div>
        <div className="legacy-banner-collection" aria-label="Six UCB06 historic banners">
          <div className="legacy-collection-heading">
            <span>THE BANNER ARCHIVE</span>
            <span>06 PIECES · ONE HISTORY</span>
          </div>
          <div className="legacy-banner-grid">
            {covers.map((item, index) => (
              <figure className={"legacy-banner legacy-banner-" + (index + 1)} key={item.image}>
                <div className="legacy-banner-image">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="legacy-banner-index">0{index + 1} / 06</span>
                </div>
                <figcaption><span>CRAZY BOYS 2006</span><span>ARCHIVE PIECE {String(index + 1).padStart(2, "0")}</span></figcaption>
              </figure>
            ))}
          </div>
          <p className="legacy-collection-note">SIX BANNERS. COUNTLESS MEMORIES. ONE CURVA.</p>
        </div>
        <div className="legacy-facts">
          <article className="legacy-fact">
            <span className="legacy-number">01 / AFRICA</span>
            <p className="legacy-kicker">A RECORD OF SCALE</p>
            <h3>THE LONGEST<br /><em>ULTRAS BÂCHE</em><br />IN AFRICA.</h3>
            <p className="legacy-fact-copy">A banner measured in more than metres — a statement of belonging, built by the curva.</p>
          </article>
          <article className="legacy-fact">
            <span className="legacy-number">02 / MOROCCO</span>
            <p className="legacy-kicker">A HISTORY ON THE ROAD</p>
            <h3>THE OLDEST<br /><em>AWAY-TRAVEL BÂCHE</em><br />IN MOROCCO.</h3>
            <p className="legacy-fact-copy">Every journey carries the same colours. Every kilometre becomes part of the archive.</p>
          </article>
        </div>
        <p className="legacy-footnote">SIX BANNERS. ONE HISTORY. ALWAYS UCB06.</p>
      </section>
      <div className="section-blend blend-gold-paper" aria-hidden="true" />

      <section className="media-section" id="media">
        <div className="media-heading"><div><h2>MEMORIES<br /><span>FROM THE CURVA.</span></h2><p>A visual record of the stands, the journeys and the generations that built UCB06.</p></div></div>
        <div className="media-grid">
          {archiveImages.map((item, index) => (
            <a className={`media-card media-card-${index + 1}`} href={item.image} target="_blank" rel="noreferrer" aria-label={"Open original photograph: " + item.title} key={item.title}>
              <div className="media-photo" style={{ backgroundImage: `url("${item.image}")` }} />
              <span className="media-count">0{index + 1} / 04</span>
              <div className="media-card-info"><span>{item.category}</span><h3>{item.title}</h3><ArrowUpRight size={20} /></div>
            </a>
          ))}
        </div>
        <div className="archive-link-wrap"><a className="text-link" href="https://ucb2006.wordpress.com/" target="_blank" rel="noreferrer">EXPLORE THE ORIGINAL UCB06 ARCHIVE <ArrowUpRight size={16} /></a></div>
      </section>
      <div className="section-blend blend-paper-dark" aria-hidden="true" />

      <section className="youtube-section" id="videos">
        <div className="youtube-heading">
          
          <div>
            <h2>THE LATEST<br /><span>FROM UCB06.</span></h2>
            <p>Matchday footage, away days and the sound of the stands. Straight from the UCB06 channel.</p>
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
      <div className="section-blend blend-dark-paper" aria-hidden="true" />

      <section className="spotify-section" id="music">
        <div className="spotify-heading">
          
          <div>
            <h2>THE SOUND<br /><span>OF UCB06.</span></h2>
            <p>The soundtrack of the curva. Discover the music connected to Crazy Boys 2006.</p>
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
      <div className="section-blend blend-paper-red" aria-hidden="true" />

      <section className="quote-section" id="archive">
        <div className="quote-mark">“</div>
        <p>OUR CITY. OUR CLUB.<br />OUR <span>UNBREAKABLE</span> BOND.</p>
        <div className="quote-bottom"><span>ULTRAS CRAZY BOYS 2006</span><span>MARRAKECH · MOROCCO</span></div>
      </section>
      <div className="section-blend blend-red-dark" aria-hidden="true" />

      <footer id="contact">
        <div className="footer-top"><div><h2>ALWAYS<br /><span>UCB06.</span></h2></div><a className="back-top" href="#">BACK TO TOP <ArrowUpRight size={18} /></a></div>
        <div className="footer-bottom">
          <a className="brand footer-brand" href="#"><img className="brand-logo" src="/images/logo.png" alt="Crazyboys 2006 emblem" /></a>
          
          <div className="footer-social-column">
            <div className="socials">
              <a href="https://youtube.com/@theucb06" target="_blank" rel="noreferrer" aria-label="Crazyboys 2006 on YouTube"><Youtube size={18} /></a>
              <a href="https://www.instagram.com/ucb06_" target="_blank" rel="noreferrer" aria-label="Crazyboys 2006 on Instagram"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/share/1CjqFyPmrd/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Crazyboys 2006 on Facebook"><Facebook size={18} /></a>
              <a href="https://open.spotify.com/artist/1sDw2xw1gleNlPECJOS8dQ" target="_blank" rel="noreferrer" aria-label="Crazyboys 2006 on Spotify"><Music2 size={18} /></a>
            </div>
            <span className="copyright">© UCB06 — ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
