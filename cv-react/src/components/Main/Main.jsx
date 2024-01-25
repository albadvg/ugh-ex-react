import { CV } from "../../CV/CV";
import About from "../About/About";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero";
import More from "../More/More";
const { hero, education, experience, languages, habilities, volunteer } = CV;

const Main = () => {
  return (
    <div>
      <Hero hero={hero}/>
      <About about={hero.aboutMe}/>
      <Education education={education}/>
      <Experience experience={experience}/>
      <More 
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  )
}

export default Main
