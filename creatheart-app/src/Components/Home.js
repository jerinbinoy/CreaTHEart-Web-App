import React from 'react'
import banner from '../Assets/nobody-photography-studio.jpg';
import './Home.css';
function Home() {
  return (
    <div>
      <div className='homePageBanner'> 
        <img src={banner} alt="Nobody-photography-studio" className='bannerImage' />
      </div>
      <div>
        <h2 className='homePageTitle '>Creating Designs <br></br>with Art & Heart</h2>
      </div>
    </div>
  )
}

export default Home