import React from 'react'
import './teste.css'
import img1 from '../../assets/born.jpg'
import img2 from '../../assets/born.jpg'
import img3 from '../../assets/born.jpg'
import img4 from '../../assets/born.jpg'
import {Scrollbar} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
const data = [
  {
    img: img1,
    Name: 'coke thomas',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate saepe vitae corporis nam architecto illum atque porro dolor ratione autem ad aut quod quo nemo pariatur minima, repellendus quam maiores!'
   

  },
  {
    img: img1,
    Name: 'meju reo',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate saepe vitae corporis nam architecto illum atque porro dolor ratione autem ad aut quod quo nemo pariatur minima, repellendus quam maiores!'
   
  },
  {
    img: img1,
    Name: 'peter obi',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate saepe vitae corporis nam architecto illum atque porro dolor ratione autem ad aut quod quo nemo pariatur minima, repellendus quam maiores!'
   
  },
  {
    img: img1,
    Name: 'amadu bello',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate saepe vitae corporis nam architecto illum atque porro dolor ratione autem ad aut quod quo nemo pariatur minima, repellendus quam maiores!'
   ,
  }
]

const teste = () => {
  return (
    <section id='Testemonials'>
      <h5>Review from clients</h5>
      <h2>Testemonials</h2>
      <Swiper className="container testemonials_container"
         modules={[Scrollbar]}
      spaceBetween={20}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          
          data.map(({img,Name,review}, index) =>{
            return(
           
              <SwiperSlide key={index} className="testemonial">
                <div className='leonails'>
                <img src={img} alt="avatar"/>
                </div>
                <h5 className='client'>{Name}</h5>
                <small className='review'>
                {review}
                </small>
                  </SwiperSlide>
                 
       
            )
          })
        }
           
      </Swiper>
    </section>
  )
}

export default teste