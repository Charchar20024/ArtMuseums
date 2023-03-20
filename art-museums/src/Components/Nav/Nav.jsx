import "./Nav.css";
import shuffle from "../assets/icons8-shuffle-98.png";
function Nav(props) {
  const next = () => {
    location.reload();
    //props.setNum(Math.floor(Math.random() * 100))
  };
  const listItems = props.banList.map((ban) => <span>{ban}</span>);

  return (
    <div className="Nav">
      <div className="ban-list">
        <h2>Ban List:</h2>
        <div>{listItems}</div>
      </div>
      <div className="shuffle-img">
        <button onClick={props.handleChange}>DISCOVER MORE ART </button>
        <h6></h6>
      </div>
    </div>
  );
}

export default Nav;
