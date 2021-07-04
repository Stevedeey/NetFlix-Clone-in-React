import React, { useEffect, useState } from 'react';
import './Nav.css';


function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () =>
        {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
      <div className={`nav ${show && "nav_black"}`}>
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="NetFlix logo"
        />

        <img
          className="nav__avatar"
          src="https://pbs.twing.com/profile_images/124011999041155"
          alt="NetFlix logo"
        />
      </div>
    );
}

export default Nav
