import './App.css';
import { useState } from 'react';
import Title from './Components/Title';


function App() {
  const [title, setTitle] = useState('Hola')
  const [isLogged, setIsLogged] = useState(false)
  const [lightGreen, setLightGreen] = useState(false)
  const [lightYellow, setLightYellow] = useState(false)
  const [lightRed, setLightRed] = useState(false)
  // title = 'Hola'
  // const setTitle = (valor) => {
  // title = valor
  //}

  const inputHandler = event => {
    setTitle(event.target.value)
  }
  const loginHandler = events => {
    setIsLogged(true)
  }
  const logoutHandler = events => {
    setIsLogged(false)
  }


  const colorGreenHandler = events => {
    setLightGreen('bg-success')
  }
  const colorYellowHandler = events => {
    setLightYellow('bg-warning')
  }
  const colorRedHandler = events => {
    setLightRed('bg-success')
  }
  return (
    <div className='App'> 
    <div>
      <button className='btn btn-success'></button>
      <button className='btn btn-warning'></button>
      <button className='btn btn-danger'></button>
      <div className='circle' ></div>
    </div>

      {!isLogged && <button className='btn btn-success' onClick={loginHandler}>Login</button>}
      {isLogged && <button className='btn btn-warning' onClick={logoutHandler}>Sign out</button>}
    
    <input type='text' onChange={inputHandler}/>
    <Title texto={title}/>    
    </div>
  )
  }


export default App
