import './Promotion.scss';

const Promotion = ({promotion}) => {
  return (
    <div className='promo' style={{backgroundImage: `url(${promotion.background})`}}>
      <div className='promo-txt'>
        <p className='promo-txt__day'>{promotion.day}</p>
        <h1 className='promo-txt__ttl'>{promotion.title}</h1>
        <span className='promo-txt-__scnt'>{promotion.discount}</span>
        <span className='promo-txt__price'>{promotion.price}</span>
      </div>
    </div>
  )
}

export default Promotion
