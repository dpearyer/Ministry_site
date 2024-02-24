import React from 'react';
import '../Connect.css';

const Connect = () => {
  return (
    <section className='connect-section' id='connect'>
   <div className='c-container'>   
  <div className='connect-container'>
  <div className='img-container-connect'>
              <img alt='' src='/images/podcast.png' className='img_logo'/>
              </div>
    <div className='saying-container'>
      <h2 className='saying'>Connect With Us</h2>

      <p className='connect-p'>
      Tune in to our uplifting and insightful social media platforms where we share inspiring messages, discussions, and reflections on faith, life, and community.
      </p>
    </div>
    <div className='card-container'>
    <div className='card'>
      <a
        className='pink-border'
        href="https://streamyard.com/" target="_blank" rel="noopener noreferrer"
      >

        <h2 className='card-h2'>Podcast </h2>

        <p className='card-p'>
        Listen to uplifting messages and insightful discussions on faith, life, and community in our podcast. Tune in for inspiration and guidance on your spiritual journey.
        </p>
      </a>

    </div>

    <div className='card'>
      <a
        className='pink-border'
        href="https://www.facebook.com/pushforchristinternationalministries/" target="_blank" rel="noopener noreferrer"
      >

        <h2 className='card-h2'>Facebook</h2>

        <p className='card-p'>
        "Follow our Facebook page to stay connected with our Christian community. Receive updates on events, join discussions, and be part of a supportive online family centered around faith and recovery.
        </p>
      </a>

    </div>

    <div className='card'>
      <a
        className='pink-border'
        href="https://www.instagram.com/pushforchristinternational?igsh=MW1sbmMwNnhhYzU2Zw==" target="_blank" rel="noopener noreferrer"
      >

        <h2 className='card-h2'>Instagram</h2>

        <p className='card-p'>
        Connect with us on Instagram for daily inspiration, community updates, and a glimpse into our ministry's journey. Join us as we share moments of faith, hope, and recovery.
        </p>
      </a>

    </div>
    </div>
  
  </div>
  </div> 
</section>
  )
}

export default Connect
