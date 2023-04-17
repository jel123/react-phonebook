import axios from "axios";

const phoneBookUrl = "http://localhost:3001/phonebook";

const getPhonebookData = () => {
  return axios.get(phoneBookUrl).then((res) => res.data);
};

const addPhoneBook = (phoneObj) => {
  return axios.post(phoneBookUrl, phoneObj).then((res) => res);
};

const alterPhoneBook = (phoneObj, id) => {
  return axios.put(`${phoneBookUrl}/${id}`, phoneObj).then((res) => res.data);
};

const deleteContact = (id) => {
  return axios.delete(`${phoneBookUrl}/${id}`).then((res) => res);
};

const exportedObject = {
  getPhonebookData: getPhonebookData,
  addPhoneBook: addPhoneBook,
  alterPhoneBook: alterPhoneBook,
  deleteContact: deleteContact,
};

export default exportedObject;
