import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import "./CTA.scss";

const CTA = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="cta">
      <div className="cta__grid-bg" aria-hidden="true" />

      <div className="cta__accents" aria-hidden="true">
        <div className="cta__accent cta__accent--circle" />
        <div className="cta__accent cta__accent--corner cta__accent--corner-tl" />
        <div className="cta__accent cta__accent--corner cta__accent--corner-br" />
        <div className="cta__accent cta__accent--dot cta__accent--dot-1" />
        <div className="cta__accent cta__accent--dot cta__accent--dot-2" />
      </div>

      <div className="cta__container container">
        <AnimatedSection>
          <h2 className="cta__title">{t("cta.title")}</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="cta__description">{t("cta.description")}</p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="cta__actions">
            <button className="cta__button cta__button--primary" type="button" onClick={handleClick}>
              {t("cta.button")}
            </button>
            <button className="cta__button cta__button--secondary" type="button" onClick={handleClick}>
              {t("cta.buttonSecondary")}
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
