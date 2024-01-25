
const Gallery = ({gallery}) => {
  return (
    <div>
        <h1>hola desde gallery</h1>
        {gallery.map((card, i) => ( 
          <div key={i}>
            <div className="card-fig">
                <img src={card.card.img} className="card-fig__img"/> 
                <span className="card-fig__badge">{card.card.discount}</span>
              </div>
              <div className="card-info">
                <span className="card-info__tag">{card.card.tag}</span>
                <h5>{card.card.title}</h5>
                <span className="card-info__price">{card.card.price}</span>
              </div>
          </div>
        ))}
    </div>
  )
}

export default Gallery
