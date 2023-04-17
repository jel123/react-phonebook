import PhonebookForm from "./components/PhonebookForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";
import "./phonebook.css";
import phonebook from "./server/phonebook";

function App() {
  const [persons, setPersons] = useState([]);

  const [searchFilter, setSearchFilter] = useState("");

  const { addPhoneBook, alterPhoneBook, deleteContact } = phonebook;

  useEffect(() => {
    const fetchPhoneData = () => {
      return phonebook.getPhonebookData().then((res) => setPersons(res));
    };
    fetchPhoneData();
  }, []);

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

    let personAddedObj = isPersonAdded(name);

    if (!!personAddedObj.length) {
      let isAlter = window.confirm(
        `${name} is already added on the phonebook, replace the old number with new one?`
      );
      const alterObj = {
        ...personAddedObj[0],
        number: number,
      };

      if (isAlter) {
        alterPhoneBook(alterObj, personAddedObj[0].id).then((res) =>
          setPersons(
            persons.map((val) => (val.id === personAddedObj[0].id ? res : val))
          )
        );
        form.name.value = "";
        form.number.value = "";
      }
      return false;
    }

    addPhoneBook(newPerson).then((res) => console.log(res));
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

  const onDeleteUserHandler = (id, name) => {
    let isDelete = window.confirm(`Do you want to delete ${name}?`);

    if (isDelete) {
      deleteContact(id).then((res) => {
        try {
          if (res.status === 200)
            setPersons(persons.filter((val) => val.id !== id));
        } catch (error) {
          console.log(error);
        }
      });
    }
  };

  return (
    <div className="phonebook-container">
      <div className="leftForm">
        <h2> Phonebook </h2>
        <Filter onChangeFilter={onChangeFilter} />
        <h3> Add a New: </h3>
        <PhonebookForm submitHandler={onAddHandler} />
      </div>
      <div className="rightNumbers">
        <Persons
          persons={nameFilter}
          onDeleteUserHandler={onDeleteUserHandler}
        />
      </div>
    </div>
  );
}

export default App;
