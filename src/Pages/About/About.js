import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import image from '../../Images/about.jpg';
import image2 from '../../Images/about2.jpg';
import image3 from '../../Images/about3.jpg';



const About = () => {
    return (
        <div className="about-main container my-5">
            {/* About Us */}
            <div className="aboutUs-main row d-flex align-items-center justify-content-around p-4 my-5">
                <div className="aboutUs col-lg-5">
                    <h1 className="about-title">About Us</h1>
                    <p>SKB Medical Hospital (Pvt.) Ltd. is the best super-specialty tertiary care hospital in Bangladesh, confidently providing comprehensive health care with the latest medical, surgical and diagnostic facilities.....</p>
                    <Link to="/">
                        <button className="read-more">Read More</button>
                    </Link>
                </div>

                <div className="col-lg-6">
                    <img src={image} alt="" className="about-img my-5 img-fluid" />
                </div>
            </div>

            {/* What We Offer */}
            <div className="privacyMain py-5">
                <div className="mx-auto privacy">
                    <h4>What We Offer</h4>
                    <p>The Ambulance service at Super Medical Hospital provides emergency support to patients who require it. In order to bring patients who call for ambulance they need to provide their home address, telephone or cellphone number to the ambulance drivers.</p>
                    <p>We ensure vaccines are available to all people, especially the poor and vulnerable in an effective way. Vaccines are provided by the Government of Bangladesh. We at the hospital also maintain the cold chain and delivery of the vaccines.</p>
                    <p>SKB Medical Hospital confidently providing comprehensive health care with the latest medical, surgical and diagnostic facilities. These services are provided by expert medical professionals, skilled nurses and technologists using state-of-the-art technology.</p>
                </div>
            </div>

            {/* About Out Nurses */}
            <div className="aboutUs2 row d-flex justify-content-around align-items-center p-5 my-5">
                <div className="col-lg-6">
                    <img src={image2} alt="" className="about-img img-fluid mb-5 mb-lg-0" />
                </div>
                <div className="col-lg-5">
                    <h4>About Our Doctors</h4>
                    <p>All the Doctors are Highly Educated and Associate Professor holding PhD in Medical with over 20 years of teaching experience.</p>
                    <p>Experienced Doctors equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and database systems.</p>
                    <p>We use student-centered, personalized way of teaching. My lessons are well organized and adapted to your needs.</p>
                </div>
            </div>

            {/* About Out Doctors */}
            <div className="aboutUs2 row d-flex justify-content-around align-items-center p-5 my-5">
                <div className="col-lg-5">
                    <h4>About Our Nurses</h4>
                    <p>The Nurses of SKB Medical Hospital provides emergency support to patients who require it. In order to bring patients who call for ambulance they need to provide their home address, telephone or cellphone number to the ambulance drivers.</p>
                    <p>They will explain the treatment part I will share my screen and show you live how the treatment is to be fed and executed. </p>
                    <p>This will help the students to learn dos and don'ts while treatment in a specific language.</p>
                </div>
                <div className="col-lg-6">
                    <img src={image3} alt="" className="about-img img-fluid mt-5 mt-lg-0" />
                </div>
            </div>

            {/* privacy Policy */}
            <div className="privacyMain py-5">
                <div className="mx-auto privacy">
                    <h4>Our Privacy policy</h4>
                    <p>Take a minute and read the site's Privacy Policy, as well as the Kids' Privacy Policy for additional information. There is a link to the company's privacy policy on the catalog request page, so you can review exactly how your personal information will be used before sending in your request.<br /><br /> It's important to read their Privacy Policy before you submit personal information. Spend some time looking around the site and check the privacy policy before you jump in. It's free to join the Parker's online website, and their privacy policy promises you won't receive unwanted emails.</p>
                </div>
            </div>
        </div>
    );
};

export default About;