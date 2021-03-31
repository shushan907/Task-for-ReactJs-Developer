import React from "react"

const NavbarButton = () => {
    const change = () => {
        if (document.querySelector('.animated-icon1').classList.value.includes('open')) {
            document.querySelector('.animated-icon1').classList.remove('open');
            return;
        } 
        document.querySelector('.animated-icon1').classList.add('open');
    }

    return (
        <span id='navbarButton' className="navbar-toggler first-button" onClick={change} type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
            aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
            <div className="animated-icon1"><span></span><span></span><span></span></div>
        </span> 
    )
}

export default NavbarButton
