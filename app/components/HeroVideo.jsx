export default function HeroVideo() {
  return (
    <video
      className="hero-video"
      src="/videos/hero.mp4"
      poster="/videos/hero-poster.jpg"
      muted
      autoPlay
      playsInline
      loop
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
