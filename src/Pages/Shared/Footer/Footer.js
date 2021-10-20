import React from 'react';
import Contact from './Contact/Contact';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Contact></Contact>
            <p className="footer py-4 mt-5 mb-0">All © Copyright Reserved by SKB Medical 2021.</p>
        </div>
    );
};

export default Footer;