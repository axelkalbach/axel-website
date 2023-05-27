import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
    return (
        <div className="Navbar">
            <nav class="navbar navbar-expand-lg bg-light">
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
    );
}

export default Navbar;