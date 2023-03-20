import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img className="img-1" src={props.image} height="400px" width="500px" />
      </div>
      <div className="card-info">
        <div className="title">
          <h1>{props.title}</h1>
          <h5>BY: {props.name}</h5>
        </div>
      </div>
      <div className="info">
        <div className="attribute">
          <button
            onClick={() => {
              props.setBanList([...props.banList, props.century]);
            }}
          >
            {props.century}
          </button>
          <button
            onClick={() => {
              props.setBanList([...props.banList, props.classification]);
            }}
          >
            {props.classification}
          </button>
          <button
            onClick={() => {
              props.setBanList([...props.banList, props.culture]);
            }}
          >
            {props.culture}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
