import { useEffect, useState } from 'react'
import './App.css'
import ItemsList from './Components/ItemsList'
import products from './Mocks/products'

function App () {
  const [allProducts, setAllProducts] = useState (products)

  const [selectedProducts, setSelectedProducts] = useState([])
  const addProduct = id => {
    console.log(id)
    const selectedProduct = products.find(product => product.id === id)
    console.log(selectedProduct)
    setSelectedProducts([
      ...selectedProducts,
      { ...selectedProduct, purchased: true }
    ])
  
  }
  const removeProduct = id => {
    console.log(id)
    const remainingProducts = selectedProducts.filter(
      product => product.id !== id
    )
    setSelectedProducts(remainingProducts)
  }

  const categoriesList = products.reduce((accum, current) => {
    return !accum.includes(current.category)
      ? [...accum, current.category]
      : accum
  }, [])

  const filtraCategoria = (event) => {
    console.log(event.target.value)
    setAllProducts(products)
    console.log(allProducts )
      const categoryProducts = products.filter(
        product => product.category === event.target.value
      )
      console.log(categoryProducts)
      setAllProducts(categoryProducts)
    
 }

  console.log(categoriesList)

  return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            
            <h1>Selección de categoría</h1>
              <select className="form-select" aria-label="Disabled select example" onChange={filtraCategoria}>
                <option value={categoriesList[0]}>{categoriesList[0]}</option>
                <option value={categoriesList[1]}>{categoriesList[1]}</option>
                <option value={categoriesList[2]}>{categoriesList[2]}</option>
                <option value={categoriesList[3]}>{categoriesList[3]}</option>
                <option value={categoriesList[4]}>{categoriesList[4]}</option>
              </select>
            
            <h1>Catálogo de productos</h1>
            <ItemsList
              productsArray={allProducts}
              addProductHandler={addProduct}
            />
          </div>
          <div className='col-12 col-md-6'>
            <h1>Carrito de compras</h1>
            {!selectedProducts.length ? (
              <h2>Selecciona algún producto de la lista</h2>
            ) : (
              <>
                <h3>
                  Total:
                  {selectedProducts.reduce((acc, curr) => acc + curr.price, 0)}
                </h3>
                <ItemsList
                  productsArray={selectedProducts}
                  removeProductHandler={removeProduct}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App