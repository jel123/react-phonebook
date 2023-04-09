import React from "react";

function Persons({ persons }) {
  return (
    <ul>
      {persons.map(value =>
      <li key={value.id}>
        <span className="name">{value.name}</span>
        <span className="number">{value.number} </span>
      </li>
      )}
    </ul>
  );
}

export default Persons;
