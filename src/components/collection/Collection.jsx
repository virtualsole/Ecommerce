import React from 'react'
// import lookbook from '../../assets/lookbook-banner.jpg'
import summer from '../../assets/summer_1.jpg'
import './Collection.css'
const Collection = () => {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12">
                    {/* <img className='img-fluid lockup stak-sd' src={lookbook} alt="" /> */}
                    <div class="card lockup">
        <div class="content">
            <h2>LOOKBOOK 2016</h2>
            <a href="#">MAKE LOVE THIS LOOK</a>
        </div>
    </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12">
                <div class="card2 lockup">
        <div class="content">
            <a href="#">SUMMER SALE</a>
            <h2 className='bold fs-1'>UP TO 70%</h2>
        </div>
    </div>
            

                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection
