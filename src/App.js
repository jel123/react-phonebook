import PhonebookForm from "./components/PhonebookForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import { useState } from "react";
import "./phonebook.css";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [searchFilter, setSearchFilter] = useState("");

  const onAddHandler = (event) => {
    event.preventDefault();
    const form = event.target,
      name = form.name.value,
      number = form.number.value,
      newPerson = {
        name: name,
        number: number,
        id: persons.length + 1,
      };

    if (!!isPersonAdded(name).length) {
      alert(`${name} is already on phonebook`);
      return false;
    }

    setPersons(persons.concat(newPerson));
    form.name.value = "";
    form.number.value = "";
  };

  const isPersonAdded = (personName) => {
    return persons.filter(
      (value) => personName.toLowerCase() === value.name.toLowerCase()
    );
  };

  const onChangeFilter = (event) => {
    setSearchFilter(event.target.value);
  };

  const nameFilter = persons.filter(
    (personsVal) =>
      personsVal.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      personsVal.number.includes(searchFilter)
  );

  return (
    <div className="phonebook-container">
      <div className="leftForm">
        <h2> Phonebook </h2>
        <Filter onChangeFilter={onChangeFilter} />
        <h3> Add a New: </h3>
        <PhonebookForm submitHandler={onAddHandler} />
      </div>
      <div className="rightNumbers">
        <Persons persons={nameFilter} />
      </div>
    </div>
  );
}

export default App;
