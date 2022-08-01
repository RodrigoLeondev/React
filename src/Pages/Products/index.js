import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])
  const [newProductKey, setNewProductKey] = useState()
  useEffect(() => {
    const getProducts = async () => {
      let productsList = await fetch('https://minireto-9af37-default-rtdb.firebaseio.com/.json')
      productsList = await productsList.json()
      setProducts(productsList)
    }
    getProducts()
  }, [newProductKey])

  return (
    
      <div className='col-12 col-md-12'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          { Object.keys(products).map(productoKey => {
            const { nombre, descripcion, imagen, precio } = products[productoKey]

            return (
              <div className='col' key={productoKey}>
                <Link to='/'>
                  <div className='card'>
                    <img src={imagen} className='card-img-top' alt='...' />
                    <div className='card-body'>
                      <h5 className='card-title'>{nombre}</h5>
                      <p className='card-text'>{descripcion}</p>
                      <p className='card-text'>{precio}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default Products