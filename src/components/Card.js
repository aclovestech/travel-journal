import pinIcon from "../images/pin.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.img}
        className="card__image"
        alt="view of the location"
      ></img>
      <div className="card__details">
        <div className="card__pin-location">
          <img src={pinIcon} className="card__pin" alt="pin icon"></img>
          <p className="card__location">{props.location}</p>
          <a href={props.link} className="card__link">
            View on Google Maps
          </a>
        </div>
        <h1 className="card__title">{props.title}</h1>
        <h2 className="card__dates">{props.dates}</h2>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
}
