import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aut deleniti aliquid ut quas illo, veritatis molestiae, ex corrupti vitae ipsum nulla voluptas dolores ipsam, odio ab magnam qui reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, facilis minus dolorum omnis quaerat excepturi inventore cum nostrum similique doloribus hic, officiis ducimus repudiandae! Saepe labore aut numquam! Eaque, culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, asperiores. Repudiandae, sapiente officia explicabo doloremque autem tempore minima in perferendis molestiae sunt voluptatum facilis, laboriosam architecto asperiores totam earum. Nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, adipisci explicabo. Magni fugiat incidunt quas numquam? Blanditiis, velit amet! Eos laborum voluptas eum non est dignissimos eligendi cum rem delectus.</p>
      </div>
    </div>
  )
}
