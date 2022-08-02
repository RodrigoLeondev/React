import Card from "../../Components/Card"
import Carrito from "../../Components/Carrito"
import CardCustom from "../../Components/Card"

const PaginaCard = (shoppingCart) => {
    return (
      <div className='row row-cols-1 row-cols-md-2 g-4'>
      { Object.keys(shoppingCart).map(productoKey => {
        
       //const { nombre, descripcion, imagen, precio } = products[productoKey]
       
        return (
          
          <CardCustom product={shoppingCart[productoKey]} productKey={productoKey}/>
          
        )
      })}
    </div>
    )
  }
  
  export default PaginaCard