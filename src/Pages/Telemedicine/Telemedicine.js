import React from 'react';
import img5 from '../../Images/telemedicine (1).png';
import img6 from '../../Images/telemedicine (2).png';
import img7 from '../../Images/about4.jpg';
import './Telemedicine.css';
import { Link } from 'react-router-dom';

const Telemedicine = () => {
    return (
        <div className="telemedicine">
            <img src={img5} alt="" className="img-telemedicine" />
            <img src={img6} alt="" className="img-telemedicine" />
            <div className="container">
                <h2 className="color mt-5 pt-3 mb-3">24 Hours Telemedicine Service: Online Doctors in Bangladesh</h2>
                <p>SKB Medical College Hospital is located at Uttara in Dhaka Metropolitan City. But we want to spread our care in all corners through our Telemedicine Service in Bangladesh. Medical College Hospital is located at Uttara in Dhaka Metropolitan City. But we want to spread our care in all corners through our Telemedicine Service in Bangladesh.</p>
                <p>Our Hospital has launched a specialized department to provide treatment and support through online medical services. It is a great opportunity for everyone to connect with online doctors in Bangladesh. Patients can easily fix an appointment with just one call and connect for an online doctor consultation service. Our helpline is 24 hours open to provide instant support during an emergency.</p>
                {/* Telemedicine */}
                <h2 className="color mt-5 pt-4 mb-4">Why SKB Telemedicine?</h2>
                <div className="row d-flex align-items-center justify-content-evenly">
                    <div className="col-12 col-md-6">
                        <ul className="tele-li">
                            <li>High Quality Healthcare from the convenience of your home town</li>
                            <li>Second opinion for your health needs</li>
                            <li>Stay in touch with your Doctor - where ever you are</li>
                            <li>No waiting in queue for a review</li>
                            <li>Reduce travel, food & accommodation costs and save time</li>
                            <li>Easy follow-up with your preferred Doctor to ensure proper care</li>
                            <li>Security - all patient information is encrypted and secured</li>
                            <li>Stay assured and feel confident with virtual support</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={img7} alt="" className="img-fluid" />
                    </div>
                </div>
                <h2 className="color mt-5 pt-4 mb-4">Our Specialities</h2>
                <p className="">Telemedicine is a service that can help a patient/ doctor/ hospital in a remote location to consult with a Super Specialist at Jewmch Hospital, using ICT (Information and Communication Technology) for the purpose of Diagnosis, Treatment, Second Opinion, or Follow-up. Our Hospital has launched a specialized department to provide treatment and support through online medical services. It is a great opportunity for everyone to connect with online doctors in Bangladesh. Patients can easily fix an appointment with just one call and connect for an online doctor consultation service. Our helpline is 24 hours open to provide instant support during an emergency. <Link className="toggle" to="/finddoctors">Here is the Specialities.</Link></p>
                {/* Frequently Asked Questions*/}
                <h2 className="color mt-5 pt-4 mb-4">Frequently Asked Questions</h2>
                <div className="">
                    <div className="row d-flex justify-content-center align-items-center">
                        <ul className="col-12 col-md-6">
                            <Link className="faq-design" to="/finddoctors">
                                <li className="tele-faq-li">Is the consultation secure?</li>
                            </Link>
                            <Link className="faq-design" to="/finddoctors">
                                <li className="tele-faq-li">How does telemedicine help me and my family?</li>
                            </Link>
                            <Link className="faq-design" to="/finddoctors">
                                <li className="tele-faq-li">Will I meet the same Specialist I met earlier at SKB?</li>
                            </Link>
                            <Link className="faq-design" to="/finddoctors">
                                <li className="tele-faq-li">Is consultation through Telemedicine expensive?</li>
                            </Link>
                        </ul>
                        <ul className="col-12 col-md-6">
                            <Link className="faq-design" to="/finddoctors">
                                    <li className="tele-faq-li">Will I get a valid prescription?</li>
                            </Link>
                            <Link className="faq-design" to="/finddoctors">
                                <li className="tele-faq-li">Do I get a refund in case of no consultation?</li>
                            </Link>
                            <Link className="faq-design" to="/finddoctors">
                                <li className="tele-faq-li">What exactly happens in a telemedicine Consultation?</li>
                            </Link>
                            <Link className="faq-design" to="/finddoctors">
                                <li className="tele-faq-li">What if I don’t get any response from the doctor?</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Telemedicine;