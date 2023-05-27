import React, { Component } from 'react'
import gradImg from '../assets/images/grad_throw.jpg'

export class AboutMe extends Component {
  render() {
    return (
        <div class="about-me-wrapper">
            <div class="about-me-text">
                <h1 class="align-left pb-4">About Me!</h1>
                <p class="about-me-description">
                    Hello! I am a Penn State University Alum with experience in Quantitative Finance and Technology Consulting.
                    At Penn State, I majored in Computer Science and Economics with a minor in Mathematics.
                    My electives focused on the Machine Learning and Artificial Intelligence, a field I am very interested in and am eager to learn more about.
                    At Penn State, I was involved with THON, the world's largest student run philanthropy, the Penn State Blue Band, and 
                    the Alpha Kappa Psi Business Fraternity. I enjoy using Mathematics and technology to tackle financial problems and
                    am an incoming software engineer at Susquehanna International Group.
                </p>
            </div>
            <div class="about-me-img">
                <img src={gradImg} class="grad-img"></img>
            </div>
        </div>
    )
  }
}

export default AboutMe