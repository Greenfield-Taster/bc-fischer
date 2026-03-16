import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import { TEAM_IMAGE } from "../../data/siteData";
import "./About.scss";

const About = () => {
  const { t } = useLanguage();
  const stats = t("about.stats");

  return (
    <section id="about" className="about">
      <div className="about__container container">
        <div className="about__grid">
          <div className="about__text">
            <AnimatedSection direction="left">
              <span className="about__label">{t("about.title")}</span>
              <h2 className="about__heading">{t("about.heading")}</h2>
              <div className="about__accent" />
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.1}>
              <p className="about__description">{t("about.description")}</p>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <p className="about__description">{t("about.description2")}</p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="about__image-wrapper" direction="right">
            <img
              className="about__image"
              src={TEAM_IMAGE}
              alt="BC Fisher team"
              loading="lazy"
            />
          </AnimatedSection>
        </div>

        <div className="about__stats">
          {Array.isArray(stats) &&
            stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                className="about__stat-card"
                delay={0.1 * (index + 1)}
              >
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
