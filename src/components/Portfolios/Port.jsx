import React from 'react'
import './port.css'
import img1 from '../../assets/ipay.png'
import img2 from '../../assets/draco.png'
import img3 from '../../assets/fam.png'
import img4 from '../../assets/girl.png'
import img5 from '../../assets/naruto.png'
import img6 from '../../assets/play.png'
const data=[
{
  id:1,
  image: img1,
  title: 'IPAY',
  github: 'https://github.com/Imejuart1/iPay',
  demo: 'https://receive022.netlify.app/' 
},
{
  id:2,
  image: img2,
  title: 'Draco fanart',
  github: 'https://github.com/imejuart1',
  demo: 'https://github.com/imejuart1'
},
{
  id:3,
  image: img3,
  title: 'Naruto family fan art',
  github: 'https://github.com/imejuart1',
  demo: 'https://github.com/imejuart1'

},
{
id:4,
image: img4,
title: '3 kind of smiles',
github: 'https://github.com/imejuart1',
demo: 'https://github.com/imejuart1'
},
{
id:5,
image: img5,
title: 'my 5 top animease46',
github: 'https://github.com/imejuart1',
demo: 'https://github.com/imejuart1'
},
{
  id:6,
  image: img6,
  title: 'Draco fanart',
  github: 'https://github.com/imejuart1',
  demo: 'https://github.com/imejuart1'
  }
]
const port = () => {
  return (
    <section id='portfolios'>
     <h5>My Recent work</h5>
     <h2>Portfolio</h2>
     <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article className="portfolio__item">
         <div className="portfolio">
           <img src={image} alt={title}/>
           </div>
           <h3>{title}</h3>
           <div className="port"> <a href={github}className='btn'target='_blank'>Github</a>
           <a href={demo} className='btn btn-primary' tatget='_blank'>Live Demo</a>
           </div>
            </article>
     
          )
        })
        }
        </div>
       
  
    
  


    </section>
  )
}

export default port
