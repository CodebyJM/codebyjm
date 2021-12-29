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
      description: "I’m a self-taught Software Developer that that has been working in tech for the last 2 years. I’ve had the pleasure of working alongside some incredible entrepreneurs, designers, and developers. I’m extremly interested in writing reuseable codes, collaborating, and reactive Javascript frameworks. From the beginning days of when I first got into software development up until now, I’ve learned and gained a solid understanding of web development standards, the importance of reusability/scalability in large enterprise applications, and how user expereince means everything.",
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
