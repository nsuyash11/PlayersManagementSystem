import React from "react";

import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img alt="player" src={`https://robohash.org/${props.players.id}?set=set2&size=80x120`} />
      <h5>{props.players.name}</h5>
      <p>{props.players.email}</p>
    </div>
  );
};
