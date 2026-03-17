import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import "./Features.scss";

const Features = () => {
  const { t } = useLanguage();
  const items = t("features.items");

  return (
    <section id="features" className="features">
      <div className="features__grid-bg" aria-hidden="true" />

      <div className="features__container container">
        <AnimatedSection>
          <div className="features__header">
            <span className="features__label">{t("features.title")}</span>
            <p className="features__subtitle">{t("features.subtitle")}</p>
          </div>
        </AnimatedSection>

        <div className="features__grid">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <AnimatedSection
                key={index}
                className="features__card"
                delay={0.05 * index}
              >
                <div className="features__icon-wrapper">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="features__card-title">{item.title}</h3>
                <p className="features__card-description">{item.description}</p>
              </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
