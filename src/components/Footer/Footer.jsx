import { useLanguage } from "../../contexts/language/useLanguage";
import { NAV_LINKS, SOCIAL_LINKS, SITE_NAME, ICON_MAP } from "../../data/siteData";
import logoLight from "../../assets/logo-light.png";
import "./Footer.scss";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand">
            <a
              href="#"
              className="footer__logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={logoLight} alt="BC Fischer" className="footer__logo-img" />
            </a>
            <p className="footer__description">{t("footer.description")}</p>
          </div>

          <div className="footer__columns">
            <div className="footer__column">
              <h4 className="footer__column-title">{t("footer.navigation")}</h4>
              <nav className="footer__nav">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    {t(link.translationKey)}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">{t("footer.contacts")}</h4>
              <div className="footer__contact-list">
                <span className="footer__contact-item">{t("contact.phone")}</span>
                <span className="footer__contact-item">{t("contact.email")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__separator" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} {SITE_NAME}. {t("footer.rights")}
          </p>
          <div className="footer__socials">
            {SOCIAL_LINKS.map((link) => {
              const Icon = ICON_MAP[link.name];
              if (!Icon) return null;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
