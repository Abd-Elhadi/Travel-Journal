import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
export default function Card(props) {
    return (
        <div className="container">
            <div className="box">
                <img className="card-img" src={props.imageUrl} alt={`${props.title}, ${props.location}`}></img>
                <div className="info-box">
                    <div className="location">
                        <span className="icon"><FontAwesomeIcon icon={faLocationDot} /></span>
                        <span>{props.location}</span>
                        <span> <a href={props.googleMapsUrl}>View on Google Maps</a> </span>
                    </div>
                    <h2 className="title">{props.title}</h2>
                    <div className="dates">
                        <span>{props.startDate} - {props.endDate }</span>
                    </div>
                    <div className="description">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}