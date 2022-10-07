import React, { useEffect, useState } from 'react'

interface FooterProps {
}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
    return <React.Fragment>
        <div className="bg-primary-dark">
            <div className="container content content-top content-full py-30">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-4">
                        <a className="link-effect font-w600" href="/">
                            <span className="font-size-xl text-white">E-Waste</span><span className="font-size-xl text-primary"> Collect</span>
                        </a>
                    </div>
                    <div className="col-12 col-md-4 text-left">
                        <h3 className="text-white">Quick Links</h3>
                        <ul className="list-unstyled text-white font-size-lg">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Shops</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 text-left">
                        <h3 className="text-white">Contact</h3>
                        <ul className="list-unstyled text-white font-size-lg">
                            <li><a href="#"><i className="fa fa-phone"></i>   0123456778</a></li>
                            <li><a href="#"><i className="fa fa-envelope"></i>   example@gmail.com</a></li>
                            <li><a href="#"><i className="fa fa-map-marker"></i>   123 ABC, Canley Heights, NSW 2166</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Footer
