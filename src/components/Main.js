import React from 'react'
import imageUrl from "../Database/IMG_8245 3.jpg"
import '../css/main.css'
import '../css/social.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const user = {
    name : ' Kothapalli Likhit Sai',
    imageUrl: imageUrl,
    imageSize: 350,
};

function Main() {
  return (
    <div className='navbar'>

        <>
        <div className='navbar_part1'>

            <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
            width: user.imageSize,
            height: user.imageSize  + 50
            }}
        />
            <h2>{user.name}</h2>

        </div>
        

        {/* Side navabar */}
        <nav className='nav-links'>
            <a className='Navbar_links' href='/About'> 
                About
            </a>

            <a className='Navbar_links' href='/Resume'> 
                Resume
            </a>

            <a className='Navbar_links' href='/Experience'> 
                Exprience
            </a>

            <a className='Navbar_links' href='/Projects'> 
                Projects
            </a>

            <a className='Navbar_links' href='/Experience1'> 
                 What Sets Me Apart
            </a>
        </nav>



         {/* Social Links */}
         <div className='social-links'>
                <a href="mailto:liko8110@colorado.edu" className="social-link">
                    <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/kothapalli-likhit-63394920b/" className="social-link">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Likhit2001" className="social-link">
                    <FaGithub />
                </a>
            </div>
        

        </>

    </div>
  )
}

export default Main