import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import { useState } from 'react'

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

  const ResumeHeading = (props) => {
    <div className='resume-heading'>
      <div className='resume-main-heading'>
        <div className='heading-bullet'>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ?(
            <div className='heading-date'>
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ' '}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    </div>
  };

  const resumeBullets = [
    {label: "Education", logoSrc: "education.svg"},
    {label: "Work History", logoSrc: "work-history.svg"},
    {label: "Projects", logoSrc: "projects.svg"},
    {label: "Interests", logoSrc: "interests.svg"},
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: {fromDate: "2020", toDate: "2021"},
      description: "My Website",
      subHeading: "Tech Used: React JS, Bootstrap"
    },
    {
      title: "Ecommerce Website",
      duration: {fromDate: "2020", toDate: "2021"},
      description: "My full time job, built an ecommerce website along with a custom user portal to recieve their results",
      subHeading: "Tech Used: Wordpress, PHP, Laravel"
    },
    {
      title: "Ecommerce Website",
      duration: {fromDate: "2020", toDate: "2021"},
      description: "My full time job, built an ecommerce website along with a custom user portal to recieve their results",
      subHeading: "Tech Used: Wordpress, PHP, Laravel"
    }
  ];

  const resumeDetals = [
    <div className='resume-screen-container' key="education">
      <ResumeHeading 
      heading={"Palm Beach State College"}
      subHeading={"BACHELOR IN INFORMATION TECHNOLOGY W/ FOCUS IN DATABASE ADMINSTRATION"}
      fromDate={"2017"}
      toDate={"2020"}
      />
      <ResumeHeading 
      heading={"Andrew College"}
      subHeading={"ASSOCIATE'S DEGREE IN BUSINESS ADMIN / STUDENT ATHLETE PLAYED SOCCER"}
      fromDate={"2015"}
      toDate={"2017"}
      />
      <ResumeHeading 
      heading={"NuCamp Coding Bootcamp"}
      subHeading={"FRONTEND WEB-DEVELOPER COURSE"}
      fromDate={"2019"}
      toDate={"2020"}
      />
    </div>,
    <div className='resume-screen-container' key="work-experience">
       <ResumeHeading 
      heading={"Precision Sciences Inc"}
      subHeading={"FRONTEND WEB-DEVELOPER"}
      fromDate={"2021"}
      toDate={"present"}
      />
      <div className='experience-description'>
        <span className='resume-description-text'>
          Currently working on an ecommerce site
        </span>
      </div>
      <div className='experience-description'>
        <span className='resume-description-text'>
        - Lead design and development of new features, content series, and components.
        </span>
        <br />
        <span className='resume-description-text'>
        - Optimizing user flows, building layouts using Figma, deploying live builds, and problem solving/optimizing website health and speed,
        </span>
        <br />
        <span className='resume-description-text'>
        - Helping deliver month-over-month traffic growth with best SEO practices, increased conversions, and revenue.
        </span>
      </div>,
      <div className='resume-screen-container '></div>



    </div>
  ]

  let fadeInScreenHandler = (screen) => {
    if(screen.fadeScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
  return (
    <div className='resume-container screen-container' id={props.id || ""}>
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
      </div>
      
    </div>
  )
}
