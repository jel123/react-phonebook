import axios from "axios";

const phoneBookUrl = process.env.BACKEND_API_URL;

console.log(phoneBookUrl);

const getPhonebookData = () => {
  return axios.get(phoneBookUrl, { crossDomain: true }).then((res) => res.data);
};

const addPhoneBook = (phoneObj) => {
  return axios
    .post(phoneBookUrl, { crossDomain: true }, phoneObj)
    .then((res) => res);
};

const alterPhoneBook = (phoneObj, id) => {
  return axios
    .put(`${phoneBookUrl}/${id}`, { crossDomain: true }, phoneObj)
    .then((res) => res.data);
};

const deleteContact = (id) => {
  return axios
    .delete(`${phoneBookUrl}/${id}`, { crossDomain: true })
    .then((res) => res.data);
};

const exportedObject = {
  getPhonebookData: getPhonebookData,
  addPhoneBook: addPhoneBook,
  alterPhoneBook: alterPhoneBook,
  deleteContact: deleteContact,
};

export default exportedObject;
