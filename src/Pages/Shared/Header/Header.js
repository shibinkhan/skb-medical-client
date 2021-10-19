import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img4 from '../../../Images/Favicon.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between">
                    <div className="d-flex justify-content-center align-items-center">
                        <Link to="/home"><img className="title-img" src={img4} alt="title-img" /></Link>
                        <Link className="navbar-brand" to="/home">SKB Medical.</Link>
                    </div>
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" to="/home">Home</Link>
                                <Link className="nav-link" to="/finddoctors">Doctors</Link>
                                <Link className="nav-link" to="/telemedicine">Telemedicine</Link>
                                <Link className="nav-link" to="ambulances">Ambulance</Link>
                                <Link className="nav-link" to="/about">About Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div>
                            {user.email &&
                                <div className="d-flex">
                                    <p className="my-auto">{user.displayName}</p>
                                    <img className="user-img mx-2" src={user.photoURL} alt="" />
                                </div>
                            }
                        </div>
                        <div>
                            {user?.email ?
                                <button className="button" onClick={logOut}>Sign Out</button> :
                                <Link className="nav-link" to="/signin"><button className="button">SIGN IN</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;