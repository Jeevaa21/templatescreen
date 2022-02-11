import React, { Component } from 'react'

 class TemplateBody extends Component {
  render() {
    
     let img=[
         {src:'./Images/image1.png',title:'img1'},
         {src:'./Images/image2.jpeg',title:'img2'},
         {src:'./Images/image3.jpeg',title:'img3'},
         {src:'./Images/image4.jpeg',title:'img4'},
         {src:'./Images/image5.jpeg',title:'img5'},
     ];

    return (
      <div className='data'>
          {
              img.map((index)=> <img  src={index.src} title={index.title} 
              alt="images" height="150" width="150" 
              style={{border:"solid gray",backgroundcolor:"gray",padding:"5px"}} />)

          }

      </div>
    )
  }
}
export default TemplateBody