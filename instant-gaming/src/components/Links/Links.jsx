import './Links.scss';

const Links = ({links}) => {
  return (
    <ul className="links">
        {links.map((link, i) => (
            <li key={i} className="links__item">
                <a href={link.url}>{link.text}</a>
            </li>
        ))}
    </ul>
  )
}

export default Links
