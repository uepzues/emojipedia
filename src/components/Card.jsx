import PropTypes from "prop-types";

function Card(props) {
  return (
    <>
      <div>
        <h1>{props.emoji}</h1>
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
