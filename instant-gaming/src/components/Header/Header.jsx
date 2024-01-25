import Links from "../Links/Links";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import './Header.scss';

const Header = ({header}) => {

    const {logo, links, menu} = header;
  return (
    <header className="header">
        <Logo logo={logo}/>
        <div className="navigation">
            <Links links={links}/>
            <Menu menu={menu}/>
        </div>
        <div className="user">
            <img src=""/>
            <img src=""/>
        </div>
    </header>
  )
}

export default Header
