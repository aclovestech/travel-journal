import globeIcon from "../images/globe.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={globeIcon} className="globe-icon" alt=""></img>
      <p>my travel journal.</p>
    </nav>
  );
}
