import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="page about">
      <h1>About</h1>
      <p>{t.aboutText}</p>
    </div>
  );
};

export default About;
