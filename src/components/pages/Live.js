import React from 'react';
import '../Live.css';

const Live = () => {
  return (
    <section>
      <div className='container'>
        <div className='watch-live-grid'>
          <div className='video-section'>
            <div className='home-logo-container'>
            </div>
            <h2 className='join-us'>Watch Live<br/></h2>
            
            <p className='quote'>
              Join us for live worship services and messages. Experience the presence of God 
              with our community as we gather together in faith and fellowship.
            </p>

            <div className='sermon-embed-container'>
              <iframe 
                src="https://pushforchristinternationalministries.sermon.net/embed" 
                scrolling="no" 
                frameBorder="0" 
                style={{maxWidth: '100%', width: '1100px', minHeight: '255px', overflow: 'hidden'}} 
                allowTransparency="true" 
                allowFullScreen 
                className="sermon-iframe"
                title="Sermon Player"
              />
              <script src="https://pushforchristinternationalministries.sermon.net/static/common/js/iframe-resizer/iframeResizer.js"></script>
              <script src="https://pushforchristinternationalministries.sermon.net/ICampus/js/embeddedPlayerHelper.js"></script>
            </div>

            <p className='service-times'>
              <strong>Service Times:</strong><br/>
              Sunday Worship • 10:00 AM<br/>
              Wednesday Bible Study • 7:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Live
