import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import "./Features.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Features = () => {
  const { t } = useLanguage();
  const items = t("features.items");
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

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

        <div className="features__grid" ref={gridRef}>
          {Array.isArray(items) &&
            items.map((item, index) => (
              <motion.div
                key={index}
                className="features__card"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
              >
                <div className="features__icon-wrapper">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="features__card-title">{item.title}</h3>
                <p className="features__card-description">{item.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
