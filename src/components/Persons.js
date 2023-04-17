import React from "react";

function Persons({ persons, onDeleteUserHandler }) {
  return (
    <ul>
      {persons.length ? (
        persons.map((value) => (
          <li key={value.id}>
            <div className="info-wrapper">
              <span className="name">{value.name}</span>
              <span className="number">{value.number} </span>
            </div>

            <button
              type="button"
              onClick={() => onDeleteUserHandler(value.id, value.name)}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <span> No data found </span>
      )}
    </ul>
  );
}

export default Persons;
