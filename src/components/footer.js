import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./footer.css"
import im1 from "../images/tiwwer.png"
import im2 from "../images/apple.png"
import im3 from "../images/instagram.png"
import im4 from "../images/in.png"
import im5 from "../images/facebook.png"
import img6 from "../images/app store.png"
import img7 from "../images/app store.png"
import img8 from "../images/1.png"
const Footer = () =>(
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4 className="logo">Logo</h4>
                    <div className="details">
                        <p>Address:iperidou 3,Athens 105 53</p>
                        <p>Mobile:+30 69 47 48 49 50</p>
                        <p>Email:info@grondas.com</p>
                    </div> 
                </div>
                <div className="footer-col">
                    <h4>TRAVELER APP</h4>
                    <ul>
                        <li><a href="#"><img src={img6} className="img3"></img></a></li>
                        <li><a href="#"><img src={img7} className="img4"></img></a></li>
                    </ul>
                </div>	   
                <div className="footer-col">
                    <h4>ABOUT</h4>
                    <ul>
                        <li><a href="#">company</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Term of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Settings</a></li>
                    </ul>
                </div>
                <div className="footer-col">      			  
                    <h4>Network</h4>
                    <ul>
                        <li><a href="#">Become a Driver</a></li>
                        <li><a href="#">Hotels</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Vacation Rentals</a></li>
                        <li><a href="#">Newsroom</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Payment Method</h4>
                    <ul>
                        <li><p><span className="p1">All Credit Cards Accepted</span></p></li>
                        <li><img src={img8} className="img"></img></li>
                    </ul>
                </div>
            </div>
            <div className="contact">
                <a href="#"><img src={im1} className="im2"></img></a>
                <a href="#"><img src={im2} className="im2"></img></a>
                <a href="#"><img src={im3} className="im2"></img></a>
                <a href="#"><img src={im4} className="im2"></img></a>
                <a href="#"><img src={im5} className="im2"></img></a>
            </div>
            <p className="p2">&copy;2011-2021 All rights reversed</p>
        </div>
        
    </footer>
)
export default Footer