import React from 'react';
// Import icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.scss';

const Contact: React.FC = () => {
    return (
        <div className='contact'>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/Danval-003' className="icon-large">
                <FaGithub />
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/daniel-armando-valdez-reyes-65bb98127' className="icon-large">
                <FaLinkedin />
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/danval15/' className="icon-large">
                <FaInstagram />
            </a>
        </div>
    );
}

export default Contact;
