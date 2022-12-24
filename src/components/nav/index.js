import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './nav.css'

const Nav = () => {
  return (
        <div className='wrap-nav px-20 py-18 '>
          <div className='d-flex gap-10'>
            <h1 className='h-1 my-auto'>Product Roadmap</h1>
            <Button>+ Add New Group</Button>
          </div>
          <div className='line-div'></div>
        </div>
  )
}

export default Nav