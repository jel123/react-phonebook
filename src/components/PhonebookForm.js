import React from "react";

function PhonebookForm({ submitHandler }) {
  return (
    <form onSubmit={submitHandler}>
      <div className="formWrapper">
        <input className="name" id="name" name="name" placeholder="Name" />
        <input
          className="number"
          id="number"
          name="number"
          placeholder="Number"
        />
        <button type="submit"> Add </button>
      </div>
    </form>
  );
}

export default PhonebookForm;
