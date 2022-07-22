
const ProductCard = (props) => {
  const { listaProductos } = props
  const { title, price, description, category, image,rating} = listaProductos

  const selectColor = ratingValue => {
    let colorClass = "";
    if (ratingValue > 3.5){
      colorClass = 'text-success'
    }
    return colorClass
  }

const color = selectColor(rating.rate)
  return (
    <div className="col">
          <div className="card">
      <img src={image} alt="" />
      <div className="card-body">
        <p className="card-text">{title}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">{category}</p>
        <p className="card-text">{price}</p>
        <p className={`card-text ${color}`}>{rating.rate}</p>
      </div>
    </div>
    </div>


  )
}
  export default ProductCard