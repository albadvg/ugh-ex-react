
const About = ({about}) => {

  return (
    <div>
      <h2>About</h2>
      <ul>
        {about.map((phrase, index) => <li key={index}>{phrase.info}</li>)}
      </ul>
    </div>
  )
}

export default About
