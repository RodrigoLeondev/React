
import './App.css';
import products from './mocks/mocks_products'
import List from './Components/List';


function App() {
  return( <div className='App'> 
    <List data={products}/> 
    {/* Aqui estamos recibiendo la prop data de List y le iteramos products 
    los productos que se mandan desde app.js se esta mandando a la lista, a través de la prop */}
  </div>

  )



}


export default App
