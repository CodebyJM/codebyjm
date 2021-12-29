import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
   
    { label: "Projects", logoSrc: "projects.svg" },
  
  ];

  //here we have
  


  const projectsDetails = [
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

  const resumeDetails = [
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
        <div className="experience-container">

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
          <br />
        </div>
      </div>
    </div>,
     
   
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };


  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };




  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

