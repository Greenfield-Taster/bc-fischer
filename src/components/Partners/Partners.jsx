import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useLanguage } from "../../contexts/language/useLanguage";
import "./Partners.scss";

const partnerNames = [
  "BuildTech", "AquaEngineering", "SteelPro", "ElectroCraft",
  "GreenBuild", "ArchiDesign", "SafetyFirst", "LogiTrans",
];

const PartnerLogo = ({ name }) => (
  <div className="partners__logo">
    <span className="partners__logo-text">{name}</span>
  </div>
);

const MarqueeRow = ({ partners, reverse = false }) => (
  <div className={`partners__marquee-track${reverse ? " partners__marquee-track--reverse" : ""}`}>
    <div className="partners__marquee-inner">
      {partners.map((name, i) => (
        <PartnerLogo key={`a-${i}`} name={name} />
      ))}
      {partners.map((name, i) => (
        <PartnerLogo key={`b-${i}`} name={name} />
      ))}
    </div>
  </div>
);

const Partners = () => {
  const { t } = useLanguage();

  return (
    <section id="partners" className="partners">
      <div className="partners__container container">
        <AnimatedSection>
          <h2 className="partners__title">{t("partners.title")}</h2>
        </AnimatedSection>
      </div>

      <div className="partners__marquee">
        <MarqueeRow partners={partnerNames} />
        <MarqueeRow partners={partnerNames} reverse />
      </div>
    </section>
  );
};

export default Partners;
