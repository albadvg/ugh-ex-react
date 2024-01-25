

const Heading = ({heading}) => {
  return (
    <div>
      <a href={heading.url}><h2>{heading.text}</h2></a>
    </div>
  )
}

export default Heading
