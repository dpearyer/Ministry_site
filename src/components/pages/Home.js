import React from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
 
  
  return (
   
    <section >
    <div className='container'>
      <div className='container-grid'>
        <div className='img-container'>
          <img alt='' src='/images/background_pfc(2).png' className='img_logo'/>
          <p className='saying-home'>Guiding individuals toward their divine destiny</p>

          </div>
         
          <div className='connect-saying'>
          <div className='home-logo-container'>
          <img alt='' src='/images/cross.png' className='home-logo'/>
          </div>
          <h2 className='join-us'>Join Us In Worship<br/> </h2>

          <p className='quote'>
          Discover healing and community on your journey after abuse and addiction. Our Christian ministry 
          provides a supportive space for individuals seeking faith-based guidance and connection as they 
          rebuild their lives.
          </p>
          <a  href="https://www.facebook.com/pushforchristinternationalministries/" target="_blank" rel="noopener noreferrer">
          <button className='connect'>Learn More</button>
          </a>
        </div>
      </div>
    </div>
    <Link to="/"></Link>
    
</section>
  )
}

export default Home
