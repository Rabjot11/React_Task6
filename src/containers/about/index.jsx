import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Rabjot Singh Kerkatta",
  },
  {
    label: "Registration Number",
    value: "21BCY10045",
  },
  {
    label: "Age",
    value: "20",
  },
  {
    label: "Country",
    value: "India",
  },
  {
    label: "Personal Email",
    value: "Singhrabjot738@gmail.com",
  },
  {
    label: "College Email",
    value: "rabjot.kerketta2021@vitbhopal.ac.in",
  },
  {
    label: "Contact No",
    value: "+91 9693024960",
  },
];

const jobSummary =
  "Hello there! I'm Rabjot Singh Kerketta. Its great to have you. I absolutely love creating things on the internet that truly come to life. My journey, into the world of development began in 2022 and along the way I stumbled upon the realms of cybersecurity, machine learning and web development.. Amongst all these discoveries it was web development that truly enchanted me. Like an artist, with a paintbrush I translated my dreams onto the canvas crafting vibrant and interactive creations that capture both hearts and minds."
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={60} />}
        
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          

          
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
        </div>
        <div className="about__content__servicesWrapper">
        </div>
      </div>
    </section>
  );
};
export default About;
