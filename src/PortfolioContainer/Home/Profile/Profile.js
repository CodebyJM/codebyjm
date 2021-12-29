import React from 'react';
import Typical from 'react-typical';
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                
                
                <div className='profile-details-name'>
                  <span className='primary-text'>
                    {" "}
                    Hello, My name is<span className='highlighted-text'> Jo Mendes</span>
                  </span>
                </div>
                <div className='profile-details-role'>
               
                  <span className='primary-text'>
                 
                    <h1>
                      <Typical
                      loop={Infinity}
                      steps={[
                        "Developer",
                        1500,
                        "Designer",
                        1500,
                        "Thinker",
                        1500,
                        "Problem-Solver",
                        1500,
                      ]} 
                      />
                    </h1>
                   
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
