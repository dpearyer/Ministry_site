import React from 'react';
import '../About.css';

const About = () => {
  return (
   
      <section>
    <div className='container' id='about'>
       
      <div className='mission-h'>
      <h1>Our Mission</h1>
      </div>
      <div className='mission-p'>
       <p>To minister to individuals who find themselves entangled in the throes of drug addiction, alcohol dependence, and/or the devastating effects of physical abuse. Our mission is to illuminate the transformative power of God's boundless love, instilling a profound understanding that through the renewal of their minds and hearts, a path to healing and restoration emerges. We fervently believe that embracing God's love provides not only a resolute escape from the clutches of affliction but also imparts the strength to forge a profoundly healthier and more joyous journey through life.</p>
       </div>
       <div className='profile-container'>
       <div className='about-profile'>
        <div className='profile-pic-container'>
        <img src='/images/pfc_pic.jpg' alt='' className='profile-img'></img>
        </div>
       <h2 className='about-name'>Jeff Howard, Overseer-(380)710-3414<br/>
Andrea Moreland- (912)308-6784<br/>
Push for Christ International Ministries
</h2>
</div>
</div>
    </div>
    </section>
  )
}

export default About
