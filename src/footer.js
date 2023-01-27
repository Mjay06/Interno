import arrow from "./images/arrow.svg"
import logomedia from "./logomedia.svg"
import facebook from "./images/facebook.svg"
import twitter from "./images/twitter.svg"
import linkedIn from "./images/linkedIn.svg"
import instagram from "./images/instagram.svg"
const Footer = () => {
    return (  
        <div className="foot">
            <div className="contact">
                <div className="contacts">
                    <h1>Wanna join the interno?</h1>
                    <p>It is a long established fact  will be distracted.</p>
                    <button className="btncontact">Contact With Us <img src={arrow} alt="" /></button>
            </div>
            </div>
            <div className="footer">
                <div className="medialinks">
                    <div className="logomedia">
                        <img src={logomedia} alt="" /> <h1>Interno</h1>
                    </div>
                    <p>It is a long established fact that a reader will be distracted lookings.</p>
                    <div className="social">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedIn} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <div className="info">
                    <h4>Pages</h4>
                    <p>About Us</p>
                    <p> Our Projects</p>
                    <p> Our Team</p>
                    <p>Contact Us</p>
                    <p>Services</p>
                </div>
                <div className="info">
                <h4>Services</h4>
                    <p>Kitchan</p>
                    <p>Living Area</p>
                    <p>Bathroom</p>
                    <p>Dinning Hall</p>
                    <p>Bed room</p>

                </div>
                <div className="info">
                <h4>Services</h4>
                    <p>55 East Birchwood Ave. Brooklyn, New York 11201 </p>
                    <p>contact@interno.com</p>
                    <p>(123) 456 - 7890</p>
                  </div>
           </div>

        </div>
    );
}
 
export default Footer;