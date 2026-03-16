import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/language/useLanguage";
import craneImg from "../../assets/crane.png";
import "./Hero.scss";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

const Hero = () => {
  const { t } = useLanguage();
  const stats = t("about.stats");

  const handleCtaClick = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      {/* Blueprint grid background */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Geometric accents */}
      <div className="hero__accents" aria-hidden="true">
        <div className="hero__accent hero__accent--circle" />
        <div className="hero__accent hero__accent--line-h" />
        <div className="hero__accent hero__accent--line-v" />
        <div className="hero__accent hero__accent--corner hero__accent--corner-tl" />
        <div className="hero__accent hero__accent--corner hero__accent--corner-br" />
        <div className="hero__accent hero__accent--dot hero__accent--dot-1" />
        <div className="hero__accent hero__accent--dot hero__accent--dot-2" />
        <div className="hero__accent hero__accent--dot hero__accent--dot-3" />
      </div>

      {/* Crane image — right side, mirrored, overlapping everything */}
      <motion.div
        className="hero__crane"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img src={craneImg} alt="" className="hero__crane-img" />
      </motion.div>

      {/* Text content — overlaps crane */}
      <div className="hero__content container">
        <div className="hero__text">
          <motion.span
            className="hero__label"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          >
            {t("about.heading")}
          </motion.span>

          <motion.h1
            className="hero__title"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
          >
            <span className="hero__title-line">Будуємо</span>
            <span className="hero__title-accent">майбутнє</span>
            <span className="hero__title-line">з точністю</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
          >
            <button className="hero__cta" type="button" onClick={handleCtaClick}>
              {t("hero.cta")}
            </button>
            <button className="hero__cta hero__cta--outline" type="button" onClick={handleContactClick}>
              {t("cta.buttonSecondary")}
            </button>
          </motion.div>

          {/* Stats overlapping */}
          <motion.div
            className="hero__stats"
            variants={fadeUp(0.45)}
            initial="hidden"
            animate="visible"
          >
            {Array.isArray(stats) &&
              stats.map((stat, i) => (
                <div key={i} className="hero__stat">
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
