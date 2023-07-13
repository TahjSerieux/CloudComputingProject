import { Link } from "react-router-dom";
import SocialMediaLinks from "../components/SocialMediaLinks";
import '../styles/LandingPage.css'
const Landing = () => {
    return ( 
        <div className="Landing-Page">
            <div className="testLandingPage">
                <h1>Landing Page</h1> <br />
                   <div className="links">
                   <span>
                       <Link to="/user/login">Login</Link>
                   </span>
                    <span>
                        <Link to="/user/signup">Signup</Link>
                    </span>
                   </div>
            </div>
            <SocialMediaLinks/>
        </div>
     );
}
 
export default Landing;