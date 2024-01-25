
const More = ({languages , habilities, volunteer}) => {
  return (
    <div>
      <div>
          <h2>Languages</h2>
          <ul>
              {languages.map((elem, i) => (
                  <li key={i}>
                      <h5>{elem.language}</h5>
                      <p>{elem.wrlevel}</p>
                      <p>{elem.splevel}</p>
                  </li>
              ))}
          </ul>
      </div>

      <div>
          <h2>Habilities</h2>
          <ul>
              { habilities.map((elem, i) => (
                  <li key={i}>{elem}</li>
              ))}
          </ul>
      </div>

      <div>
          <h2>Volunteer</h2>
          <ul>
              {volunteer.map((elem, i) => (
                  <li key={i}>
                      <h5>{elem.name}</h5>
                      <p>{elem.where}</p>
                      <p>{elem.description}</p>
                  </li>
              ))}
          </ul>
      </div>
    </div>

    
  )
}

export default More
