import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./AboutMe.css"

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
      if(screen.fadeScreen !== props.id)
      return
      Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTSANTS = {
      description: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah .",
      highlights: {
        skills: [
          "React","Javascript ES6+","CSS","HTML","SCSS","SASS","GitHub","Markup", "UI Design", "UI Experience","Google Analytics", "Google Tag Manager", "Enhanced Ecoommerce GA","Tailwinds","Bootstrap", "Wordpress", "Figma", "Adobe Photoshop", "SEO"
        ],
        heading: "My Skills"
      }
    }
    const renderHighlight = () => {
      return SCREEN_CONSTSANTS.highlights.skills.map((value, i) => (
        <span className="badge badge-light p-1" key={i}>
          <span className='badge-child'>{value}</span>
        </span>
      ));
    };
     
  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>{SCREEN_CONSTSANTS.description}</span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
         
          
          </div>
        </div>
      </div>
    </div>
  )
}
