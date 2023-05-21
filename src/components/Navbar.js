import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeAfrica} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div className="navbar">
            <span className="globe-icon" ><FontAwesomeIcon icon={faGlobeAfrica} /></span>
            <span className="logo-text">my travel journey</span>
        </div>
    )
}