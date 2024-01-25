import data from '../../Data/product';
import Colors from '../Colors/Colors';
import Sizes from '../Sizes/Sizes';
const product = data.product;
const {title, img, price, ref, colors, sizes} = product;

const Product = () => {

  return (
    <div>
        <div>
            <img src={img}/>
        </div>
        <div>
            <h1>{title}</h1>
            <p>{ref}</p>
            <span>{price}</span>
            <Colors colors={colors}/>
            <Sizes sizes={sizes}/>

            <button>AÑADIR A LA CESTA</button>
            <p>Paga a plazos sin intereses</p>
            <p>Paga en 3 plazos sin intereses tus compras de entre 30€ y 2000€</p>
            
            <div>
                <div>
                    <p>Recogida en tienda</p>
                    <span>GRATIS</span>
                </div>
                <div>
                    <p>Envío a domicilio estándar</p>
                    <span>GRATIS</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product
