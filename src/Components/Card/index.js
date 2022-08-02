import { CardBody, CardTitle, CardText, img, Button, Card } from "reactstrap"
import { Link } from 'react-router-dom'


const CardCustom = ({product, addHandler}) => {

const {imagen, nombre, descripcion, precio } = product
// const { productId } = productProps.productKey


return(
      <div className='col' >
      
        <div className='card h-100 '>
          <img src={imagen} className='card-img-top h-50' alt='...' />
          <div className='card-body '>
            <h5 className='card-title'>{nombre}</h5>
            <p className='card-text'>{`${descripcion!==undefined ? descripcion.substring(0,55): ""}`}</p>
            <p className='card-text'>{precio}</p>
              <Link to='/'>
                <button className=' btn btn-primary' 
                onClick={()=>addHandler(product)}>
                Agregar al carrito</button>
              </Link>
                <button className=' btn btn-success'>Ver detalle</button>

          </div>
        </div>
      
    </div>
    )
}
export default CardCustom  