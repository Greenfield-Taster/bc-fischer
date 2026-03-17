import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import { SOCIAL_LINKS, ICON_MAP } from "../../data/siteData";
import "./Contact.scss";

const CONTACT_ITEMS = [
  { icon: Phone, labelKey: "contact.phones", type: "phones" },
  { icon: Mail, labelKey: "contact.email", type: "email" },
  { icon: MapPin, labelKey: "contact.address", type: "address" },
];

const CustomSelect = ({ options, label }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options?.[0] || "");
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (options?.length && !selected) setSelected(options[0]);
  }, [options, selected]);

  return (
    <div className="contact__field" ref={ref}>
      <span className="contact__field-label">{label}</span>
      <button
        type="button"
        className={`contact__input contact__custom-select${open ? " contact__custom-select--open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="contact__custom-select-value">{selected}</span>
        <ChevronDown size={18} className={`contact__custom-select-icon${open ? " contact__custom-select-icon--open" : ""}`} />
      </button>
      {open && (
        <div className="contact__dropdown">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={`contact__dropdown-item${option === selected ? " contact__dropdown-item--active" : ""}`}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  const subjects = t("contact.subjects");

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
                const value = t(item.labelKey);
                return (
                  <div key={item.type} className="contact__item">
                    <div className="contact__item-icon">
                      <Icon size={20} />
                    </div>
                    <div className="contact__item-values">
                      {Array.isArray(value) ? (
                        value.map((v) => (
                          <span key={v} className="contact__item-value">{v}</span>
                        ))
                      ) : (
                        <span className="contact__item-value">{value}</span>
                      )}
                    </div>
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
              {Array.isArray(subjects) && (
                <CustomSelect
                  options={subjects}
                  label={t("contact.formSubject")}
                />
              )}
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
