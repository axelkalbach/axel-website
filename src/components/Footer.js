import React, { Component } from 'react'
import { FaGithub, FaLinkedin, FaSoundcloud, FaEnvelope, FaReact } from 'react-icons/fa';

export class Footer extends Component {
  render() {
    return (
        <footer className="footer pt-5">
            <div className="container">
                <div className="d-flex flex-column">
                    <a href="https://github.com/axelkalbach" className="icon" target="_blank">
                        <div class="d-flex justify-content-center align-items-center">
                            <FaGithub size="20" />
                            <p class="my-auto ps-2">axelkalbach on Github</p> 
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/axel-kalbach-a729a0193/" className="icon" target="_blank">
                        <div class="d-flex justify-content-center align-items-center">
                            <FaLinkedin size="20" />
                            <p class="my-auto ps-2">Axel Kalbach on LinkedIn</p>
                        </div>
                    </a>
                    <a href="https://soundcloud.com/axel-kalbach" className="icon" target="_blank">
                        <div class="d-flex justify-content-center align-items-center">
                            <FaSoundcloud size="20" />
                            <p class="my-auto ps-2">axelkalbach on SoundCloud</p>
                        </div>
                    </a>
                    <a href="mailto:axelkalbach@gmail.com" className="icon">
                        <div class="d-flex justify-content-center align-items-center">
                            <FaEnvelope size="20" />
                            <p class="my-auto ps-2">email me at axelkalbach@gmail.com</p>
                        </div>
                    </a>
                    <div class="double-footer">
                        <p class="pt-2 mb-1">&copy; 2023 Axel Kalbach</p>
                        <div class="d-flex justify-content-center align-items-center mb-5">
                            <FaReact size="15" />
                            <p class="my-auto ps-2">made with react</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer