import './Logo.scss';

const Logo = ({logo}) => {
  return (
    <div className="logo">
      <img src={logo.img}/>
    </div>
  )
}

export default Logo
