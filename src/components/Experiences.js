import React, { Component } from 'react'
import thonImg from '../assets/images/thon_logo.jpg'
import sigImg from '../assets/images/susquehanna_logo.jpg'
import cgiImg from '../assets/images/cgi_logo.jpg'



export class Experiences extends Component {
  render() {
    return (
      <div class="experiences-wrapper">
        <h1 class="text-start">My Experiences</h1>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div className="experience-item">
                <div class="d-flex align-items-center">
                  <img src={thonImg} className="experience-icon pe-5"></img>
                </div>
                <div className="experience-description">
                  <h3 className="text-start">THON Technology Captain</h3>
                  <p className="text-start">As a Special Project Developer for THON 2023, I helped develop and maintain several web applications (Django, Vue.js) used by
                    volunteers to ensure the technological needs of THON were fulfulled. Specifically, I helped develop the point of sale
                    and inventory tracking systems for the merchandise committee which tracked thousands of merchandise sales throughout the year.
                    I also helped create and maintain a polling system used during THON Weeekend to poll thousands of spectators
                    and display results for the Bryce Jordan Center.
                  </p>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div className="experience-item">
                <div class="d-flex align-items-center">
                  <img src={sigImg} className="experience-icon pe-5 py-5"></img>
                </div>
                <div className="experience-description">
                  <h3 className="text-start">Susquehanna International Group - Technology Intern</h3>
                  <p className="text-start">
                    At Susquehanna International Group, I was placed on the Spreads & Auctions team as a software developer.
                    I helped develop software that tracked the performance and accuracy of strategies actively engaging in the
                    spreads market nationwide. I also created internal tools that drastically improved the time needed to target
                    issues that arose within a typical trading day.
                  </p>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div className="experience-item">
                <div class="d-flex align-items-center">
                  <img src={cgiImg} className="experience-icon pe-5 py-5"></img>
                </div>
                <div className="experience-description">
                  <h3 className="text-start">CGI - Software Development Intern</h3>
                  <p className="text-start">
                    At CGI, I enhanced my front end skills while working with a team of developers associated with a major
                    American bank. I helped develop and maintain an internal tool that tracked the usage and efficiency of managers'
                    staff, allowing for higher efficiency of task delegation and project completion rates. I developed an Angular skillset
                    and helped adjust the front end of the system to include more components, leading to more consistency across apps
                    as well as easier changes in the future.
                  </p>
                </div>
              </div>
            </li>
        </ul>

      </div>
    )
  }
}

export default Experiences