
const Education = ({education}) => {
  return (
    <div>
      <h2>Education</h2>
      <ul>
        {education.map((elem, index) => (
            <li key={index}>
                <h5>{elem.name}</h5>
                <p>{elem.date}</p>
                <p>{elem.where}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Education
