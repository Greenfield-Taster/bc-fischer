import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import { PORTFOLIO_IMAGES } from "../../data/siteData";
import "./Portfolio.scss";

const Portfolio = () => {
  const { t } = useLanguage();
  const items = t("portfolio.items");

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__container container">
        <AnimatedSection>
          <div className="portfolio__header">
            <h2 className="portfolio__title">{t("portfolio.title")}</h2>
            <p className="portfolio__subtitle">{t("portfolio.subtitle")}</p>
          </div>
        </AnimatedSection>

        <div className="portfolio__grid">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <AnimatedSection
                key={index}
                className={`portfolio__item${index === 0 ? " portfolio__item--featured" : ""}`}
                delay={0.08 * index}
              >
                <img
                  className="portfolio__image"
                  src={PORTFOLIO_IMAGES[index]}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="portfolio__overlay">
                  <span className="portfolio__badge">{item.category}</span>
                  <h3 className="portfolio__item-title">{item.title}</h3>
                  <span className="portfolio__item-location">{item.location}</span>
                </div>
              </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
