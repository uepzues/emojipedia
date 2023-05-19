import PropTypes from "prop-types";

function Card(props) {
  return (
    <>
      <div className="card">
        <h2>{props.emoji}</h2>
        <p>{props.name}</p>
        <p>{props.meaning}</p>
      </div>
    </>
  );
}

Card.propTypes = {
  emoji: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  meaning: PropTypes.string.isRequired,
};

export default Card;
