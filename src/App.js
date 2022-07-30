import { useState } from 'react'
import './App.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, Routes, Route } from 'react-router-dom'
import Pagina2 from './Pages/Pagina2';
import PaginaCard from './Pages/PaginaCard';
import OtraPagina from './Pages/Otra_pagina';

function App () {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className='App'>
      <Navbar expand='md' color='primary' container='m' dark>
        <NavbarBrand href='/'>Púchale acá para el inicio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='/pagina-card' className='nav-link'>
                Páginas de cards
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/pagina-2' className='nav-link'>
                Segunda página
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/otra-pagina' className='nav-link'>
                Página de dibujitos
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <Routes>
              <Route path='/' element={<h1>Página de prueba</h1>} />
              <Route path='pagina-card' element={<PaginaCard />} />
              <Route path='pagina-2' element={<Pagina2 />} />
              <Route path='otra-pagina' element={<OtraPagina />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App