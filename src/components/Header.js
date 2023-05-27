import profilePic from "../assets/images/profile_edited.jpg"
import { FaGithub, FaLinkedin, FaSoundcloud, FaEnvelope } from 'react-icons/fa';


function Header() {
    return (
        <div className="header-wrapper">
            <div className="Navbar pt-5">
                <nav class="navbar navbar-expand-lg bg-transparent">
                    <div class="container-fluid d-flex justify-content-center">
                        <button class="btn btn-sm btn-outline-secondary navbar-brand" type="button">
                            <a class="" href="#about">About Me</a>
                        </button>
                        <button class="btn btn-sm btn-outline-secondary navbar-brand" type="button">
                            <a class="" href="#experiences">Experiences</a>
                        </button>
                    </div>
                </nav>
            </div>
            <div className="header-info">
                <img src={profilePic} className="profile-pic"></img>
                <div className="title-text">
                    <div className="header-item">
                        <h1 className="name">AXEL KALBACH</h1>
                    </div> 
                    <div className="header-item">
                        <h3 className="header-desc">Penn State Computer Science & Economics Graduate</h3>
                    </div>
                    <div className="header-item">
                        <a href="https://github.com/axelkalbach" className="icon" target="_blank">
                            <FaGithub size="30" />
                        </a>
                        <a href="https://www.linkedin.com/in/axel-kalbach-a729a0193/" className="icon" target="_blank">
                            <FaLinkedin size="30" />
                        </a>
                        <a href="https://soundcloud.com/axel-kalbach" className="icon" target="_blank">
                            <FaSoundcloud size="30" />
                        </a>
                        <a href="mailto:axelkalbach@gmail.com" className="icon">
                            <FaEnvelope size="30" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;