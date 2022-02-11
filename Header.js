import React, { Component } from 'react'
import TemplateBody from './TemplateBody'

 class Header extends Component {
  render() {
    return (
      <div className='header'>
      
        <h1 className='headTitle'>HFR LOGO</h1>
        <h3 className='subheading'>Choose a Template </h3> 
        
        <div className='template'>
        <TemplateBody/>
        </div>
      </div>
    )
  }
}

export default Header