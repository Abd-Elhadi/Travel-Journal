import {faTwitter, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="footer">
            <a className="twitter" href="https://twitter.com/abdelhadiomarr" target="_blank" rel="noreferrer"><span><FontAwesomeIcon icon={faTwitter}/></span></a>
            <a className="linkedin" href="https://www.linkedin.com/in/abdelhadi-omar-b2a630173/" target="_blank" rel="noreferrer"><span><FontAwesomeIcon icon={faLinkedin}/></span></a>
            <a className="github" href="https://github.com/Abd-Elhadi" target="_blank" rel="noreferrer"><span><FontAwesomeIcon icon={faGithub}/></span></a>
        </div>
    )
}