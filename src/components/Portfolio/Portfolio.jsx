import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import { PORTFOLIO_IMAGES } from "../../data/siteData";
import "./Portfolio.scss";

const INITIAL_COUNT = 6;

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
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.25 },
  },
};

const Portfolio = () => {
  const { t } = useLanguage();
  const items = t("portfolio.items");
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  const visibleItems = Array.isArray(items)
    ? expanded
      ? items
      : items.slice(0, INITIAL_COUNT)
    : [];

  const hasMore = Array.isArray(items) && items.length > INITIAL_COUNT;

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
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => {
              const globalIndex = Array.isArray(items) ? items.indexOf(item) : index;
              const hasImage = globalIndex < PORTFOLIO_IMAGES.length;

              return (
                <motion.div
                  key={`${item.title}-${item.location}`}
                  className={`portfolio__item${
                    index === 0 ? " portfolio__item--featured" : ""
                  }${!hasImage ? " portfolio__item--text" : ""}`}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={gridInView ? "visible" : "hidden"}
                  exit="exit"
                  layout
                >
                  {hasImage ? (
                    <>
                      <img
                        className="portfolio__image"
                        src={PORTFOLIO_IMAGES[globalIndex]}
                        alt={item.title}
                        loading="lazy"
                      />
                      <div className="portfolio__overlay">
                        <span className="portfolio__badge">{item.category}</span>
                        <h3 className="portfolio__item-title">{item.title}</h3>
                        <span className="portfolio__item-location">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="portfolio__badge">{item.category}</span>
                      <div className="portfolio__text-content">
                        <h3 className="portfolio__item-title">{item.title}</h3>
                        <p className="portfolio__item-description">{item.description}</p>
                        <span className="portfolio__item-location">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {hasMore && (
          <AnimatedSection className="portfolio__toggle-wrapper">
            <button
              className="portfolio__toggle"
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? (
                <>
                  {t("portfolio.showLess")}
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  {t("portfolio.showMore")}
                  <ChevronDown size={20} />
                </>
              )}
            </button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
