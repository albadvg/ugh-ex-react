
const Hero = ({hero}) => {
  return (
    <div className="hero">
        <h1>{hero.name}</h1>
        <p>{hero.address} {hero.city}</p>
        <p>{hero.email}</p>
        <p>{hero.phone}</p>
        <p>{hero.gitHub}</p>
        <p>{hero.birthDate}</p>
    </div>
  )
}

export default Hero
