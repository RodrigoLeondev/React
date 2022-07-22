import ProductCard from "../ProductCard"

const List = props => {
  const { data } = props
  //arreglo con la data que queremos enlistar, la tenemos que mandar a app.js como prop
  return (
    <div className='row row-cols-1 row-cols-md-4 g-4'>
      { data.map( producto => (
        <ProductCard listaProductos={producto}/>
        ))}
    </div>
  )
}

export default List