import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import { SOCIAL_LINKS, ICON_MAP } from "../../data/siteData";
import "./Contact.scss";

const CONTACT_ITEMS = [
  { icon: Phone, labelKey: "contact.phone", type: "phone" },
  { icon: Mail, labelKey: "contact.email", type: "email" },
  { icon: MapPin, labelKey: "contact.address", type: "address" },
];

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="contact__grid-bg" aria-hidden="true" />

      <div className="contact__container container">
        <div className="contact__grid">
          <AnimatedSection className="contact__info" direction="left">
            <div className="contact__info-header">
              <span className="contact__label">{t("contact.title")}</span>
              <p className="contact__subtitle">{t("contact.subtitle")}</p>
            </div>

            <div className="contact__items">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.type} className="contact__item">
                    <div className="contact__item-icon">
                      <Icon size={20} />
                    </div>
                    <span className="contact__item-value">{t(item.labelKey)}</span>
                  </div>
                );
              })}
            </div>

            <div className="contact__socials">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.name];
                if (!Icon) return null;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className="contact__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection className="contact__form-wrapper" direction="right">
            <h3 className="contact__form-title">{t("contact.formTitle")}</h3>
            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact__form-row">
                <label className="contact__field">
                  <span className="contact__field-label">{t("contact.formName")}</span>
                  <input
                    className="contact__input"
                    type="text"
                    placeholder={t("contact.formName")}
                  />
                </label>
                <label className="contact__field">
                  <span className="contact__field-label">{t("contact.formPhone")}</span>
                  <input
                    className="contact__input"
                    type="tel"
                    placeholder="+380"
                  />
                </label>
              </div>
              <label className="contact__field">
                <span className="contact__field-label">{t("contact.formSubject")}</span>
                <select className="contact__input contact__select">
                  {Array.isArray(t("contact.subjects")) &&
                    t("contact.subjects").map((subject) => (
                      <option key={subject}>{subject}</option>
                    ))}
                </select>
              </label>
              <label className="contact__field">
                <span className="contact__field-label">{t("contact.formMessage")}</span>
                <textarea
                  className="contact__input contact__textarea"
                  placeholder={t("contact.formMessage")}
                  rows={4}
                />
              </label>
              <button className="contact__submit" type="submit">
                {t("contact.formSubmit")}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
