import "./Footer.css";

const EMAIL = "saliakbar790@gmail.com";
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-top">
          <a href="#home" className="footer-brand">
            <span className="footer-brand-mark">A</span>
            <span>
              Ali Akbar<span className="footer-brand-dot">.</span>
            </span>
          </a>

          <p className="footer-tagline">
            Building digital experiences with code, creativity & AI.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/aliakbar123634"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn ↗
            </a>

            <a href={`mailto:${EMAIL}`} aria-label="Email">
              Email ↗
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© {YEAR} Ali Akbar. All rights reserved.</p>

          <a href="#home" className="footer-back-to-top">
            Back to top <span>↑</span>
          </a>

          <p className="footer-location">
            Designed & built with <span>♥</span> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}