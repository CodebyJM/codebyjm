import React from 'react';
import Typical from 'react-typical';
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                  <div className='colz-icon'>

                    <a href='#'>
                      <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                      <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='#'>
                      <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </div>
                </div>
                
                <div className='profile-details-name'>
                  <span className='primary-text'>
                    {" "}
                    Hello, I'm<span className='highlighted-text'> Jo</span>
                  </span>
                </div>
                <div className='profile-details-role'>
                  <span className='primary-text'>
                    {" "}
                    <h1>
                      {" "}
                      <Typical
                      loop={Infinity}
                      steps={[
                        "Developer",
                        1500,
                        "Designer",
                        1500,
                        "Problem-Solver",
                        1500,
                        "Coffee Lover",
                        1500,
                      ]} ejrfejrofierogjoieger
                      />
                    </h1>
                    <span className='profile-role-tagline'>
                      Full stack dev, grinding away
                    </span>
                  </span>
                </div>
                <div className='profile-options'>
                  <button className='btn primary-btn'>
                    {" "}
                    Hire Me {" "}
                  </button>
                  <a href='#'>
                    <button className='btn highlighted-btn'>Yeet</button>
                  </a>
                </div>
            </div>
            <div className='profile-picture'>
              <div className='profile-picture-background'>

              </div>
            </div>
        </div>      
    </div>
  )
}
