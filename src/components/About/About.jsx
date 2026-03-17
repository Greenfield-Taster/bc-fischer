import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import { TEAM_IMAGE } from "../../data/siteData";
import "./About.scss";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="about__grid-bg" aria-hidden="true" />

      <div className="about__container container">
        <div className="about__layout">
          <div className="about__text">
            <AnimatedSection direction="left">
              <span className="about__label">{t("about.title")}</span>
              <h2 className="about__heading">{t("about.heading")}</h2>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.1}>
              <p className="about__description">{t("about.description")}</p>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <p className="about__description">{t("about.description2")}</p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="about__image-block" direction="right">
            <div className="about__image-frame">
              <div className="about__corner about__corner--tl" aria-hidden="true" />
              <div className="about__corner about__corner--br" aria-hidden="true" />
              <img
                className="about__image"
                src={TEAM_IMAGE}
                alt="BC Fisher team"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
