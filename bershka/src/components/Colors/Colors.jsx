
const Colors = ({colors}) => {
  return (
    <ul>
      {colors.map((col, i) => (
        <li key={i}>{col}</li>
      ))}
    </ul>
  )
}

export default Colors
