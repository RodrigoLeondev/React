import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App () {

  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
  let result = await fetch(
    'https://blog-react-248c6-default-rtdb.firebaseio.com/.json',
    {   
    method: 'POST',
    body: JSON.stringify(data)
  }
)
  }
    return(  
  <div className='container'>
    <div className='row'>
      <div className='col-12 col-md-6'>
        <div className="form-group">
      <label htmlFor="exampleInputEmail1">Nombre</label>
      <input {...register('nombre')}/>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input {...register('email')}/>
      </div>  

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Dedos</label>
        <input {...register('dedos')}/>
      </div>

      <button   
        type='submit'
        className='btn btn-primary'
        >Guardar</button>
  </form>
      </div>
    </div>
  </div>

  )

}

export default App