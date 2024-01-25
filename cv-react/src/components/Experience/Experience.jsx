
const Experience = ({experience}) => {
  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {experience.map((elem, i) => (
            <li key={i}>
                <h5>{elem.name}</h5>
                <p>{elem.date}</p>
                <p>{elem.where}</p>
                <p>{elem.description}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
