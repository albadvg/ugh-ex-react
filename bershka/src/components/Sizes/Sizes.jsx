import './Sizes.css';

const Sizes = ({sizes}) => {
  return (
    <ul>
      {sizes.map((sz, i) => (
        <div key={i}>
            <li  className={sz.qty === 0 && 'none'}>{sz.name}</li>
            <p className={sz.qty > 5  || sz.qty === 0 && 'hidden'}>Pocas</p>
        </div>
      ))}
    </ul>
  )
}

export default Sizes



