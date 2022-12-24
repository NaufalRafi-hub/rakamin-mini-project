import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './nav.css'

const Nav = () => {
  return (
        <div className='wrap-nav'>
          <div className='d-flex ml-20 mt-18 gap-10 align-items-center'>
            <h1 className='h-1'>Product Roadmap</h1>
            <Button>+ Add New Group</Button>
          </div>
        </div>
  )
}

export default Nav