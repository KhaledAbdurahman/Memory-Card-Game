const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-front">?</div>
      <div className="card-back">{card.value}</div>
    </div>
  );
};

export default Card;
