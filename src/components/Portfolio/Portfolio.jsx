import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import { PORTFOLIO_IMAGES } from "../../data/siteData";
import "./Portfolio.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.06 * i,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Portfolio = () => {
  const { t } = useLanguage();
  const items = t("portfolio.items");
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__grid-bg" aria-hidden="true" />

      <div className="portfolio__container container">
        <AnimatedSection>
          <div className="portfolio__header">
            <span className="portfolio__label">{t("portfolio.title")}</span>
            <p className="portfolio__subtitle">{t("portfolio.subtitle")}</p>
          </div>
        </AnimatedSection>

        <div className="portfolio__grid" ref={gridRef}>
          {Array.isArray(items) &&
            items.map((item, index) => (
              <motion.div
                key={index}
                className={`portfolio__item${index === 0 ? " portfolio__item--featured" : ""}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
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
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
