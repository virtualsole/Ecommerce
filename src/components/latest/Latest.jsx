import React, {useState} from 'react'
import dummy from '../../assets/blog-15.png'
import dummy1 from '../../assets/blog-09_2.png'
import dummy2 from '../../assets/blog-19.png'

import './Latest.css'
const Latest = () => {
    const [cards, setCards] = useState([
        {
            id: 1, 
            img: dummy,
            title: 'Prada Collection For Men',
            span: 'By claue2 on Sep 23, 2021',
            pera: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque expedita excepturi omnis architecto iusto, officiis libero, quos voluptatem laudantium eius nostrum deleniti magni? Corporis mollitia repudiandae magnam exercitationem inventore.'
           
            
        },
        {
            id: 2, 
            img: dummy1,
            title: 'Suspendisse consequat orci',
            span: 'By claue2 on Sep 23, 2021',
            pera: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque expedita excepturi omnis architecto iusto, officiis libero, quos voluptatem laudantium eius nostrum deleniti magni? Corporis mollitia repudiandae magnam exercitationem inventore.'

        },
        {
            id: 3, 
            img: dummy2,
            title: 'Burberry Collection For Women',
            span: 'By claue2 on Sep 23, 2021',
            pera: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque expedita excepturi omnis architecto iusto, officiis libero, quos voluptatem laudantium eius nostrum deleniti magni? Corporis mollitia repudiandae magnam exercitationem inventore.'
                    },
    
    ]);
  return (
    <section>
        <div className="container p-5">
            <div className="content-heading">

        <h3 className=' mb-lg-2 title'>LATEST FROM BLOG</h3>
        <p className='block-note'>The freshest and most exciting news
        </p>
            </div>

            <div className="row mt-5">
{cards.map((card) => (

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
               
       
               <div class="product-card">
          <img className='img-fluid mb-3' src={card.img} alt="Product Image" />
          <h3>{card.title}</h3>
          <span>{card.span}</span>
    <p>{card.pera}</p>
        </div>
      
                </div>
))}
            </div>
        </div>
    </section>
  )
}

export default Latest