import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../contexts/language/useLanguage";
import { NAV_LINKS } from "../../data/siteData";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logoDark from "../../assets/logo-dark.png";
import "./Header.scss";

const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="header__inner container">
        <a
          className="header__logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logoDark} alt="BC Fischer" className="header__logo-img" />
        </a>

        <nav className="header__nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="header__nav-link"
              onClick={() => handleNavClick(link.id)}
              type="button"
            >
              {t(link.translationKey)}
            </button>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageSwitcher />
          <button
            className="header__burger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            type="button"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="header__mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
      <div className={`header__mobile-menu${menuOpen ? " header__mobile-menu--open" : ""}`}>
        <nav className="header__mobile-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="header__mobile-link"
              onClick={() => handleNavClick(link.id)}
              type="button"
            >
              {t(link.translationKey)}
            </button>
          ))}
        </nav>
        <div className="header__mobile-actions">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
