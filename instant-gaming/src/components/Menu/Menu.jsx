import './Menu.scss';

const Menu = ({menu}) => {
  return (
    <nav className='nav'>
        <ul>
            {menu.map((item, i) => (
                <li key={i}>
                    <a href={item.url}>{item.text}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Menu
