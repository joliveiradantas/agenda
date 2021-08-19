const getContacts = () => {
  try {
    
    /* Caso utilizássemos o axios como http client para a comunicação com o server */
    // const response = await axios.get(`${API}/contacts`);
    // let data = parseList(response);    
    // return data;  

    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    return contacts;
    
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateContact = (contact) => {
  try {
    
    /* Caso utilizássemos o axios como http client para a comunicação com o server */
    // const response = await axios.put(`${API}/contacts/${contact.id}`, contact);
    // const updatedContact = parseItem(response, 200);
    // return updatedContact;

    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const index = findContactIndex(contact);
    contacts.splice(index, 1, contact);
    storeDataInBrowser(contacts);

  } catch (error) {
    console.error(error);
    return null;
  }
};

const addContact = (contact) => {
  try {

    /* Caso utilizássemos o axios como http client para a comunicação com o server */
    // const response = await axios.post(`${API}/contacts`, contact);
    // const addedContact = parseItem(response, 201);
    // return addedContact;

    const contacts = getContacts();
    contacts.push(contact);
    storeDataInBrowser(contacts);

  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteContact = (contact) => {
  try {

    /* Caso utilizássemos o axios como http client para a comunicação com o server */    
    // const response = await axios.delete(`${API}/contacts/${contact.id}`);
    // parseItem(response, 200);
    // return contact.id;

    const contacts = getContacts();
    const index = findContactIndex(contact);
    contacts.splice(index, 1);
    storeDataInBrowser(contacts);

  } catch (error) {
    console.error(error);
    return null;
  }
};

const findContactIndex = (contact) => {

  const contacts = getContacts();  
  const index = contacts.findIndex(c => c.id === contact.id);
  return index;
};

const storeDataInBrowser = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

// const parseList = response => {
//   if (response.status !== 200) throw Error(response.message);
//   if (!response.data) return [];
//   let list = response.data;
//   if (typeof list !== 'object') {
//     list = [];
//   }
//   return list;
// };

// export const parseItem = (response, code) => {
//   if (response.status !== code) throw Error(response.message);
//   let item = response.data;
//   if (typeof item !== 'object') {
//     item = undefined;
//   }
//   return item;
// };

export const dataService = {
  getContacts,
  updateContact,
  addContact,
  deleteContact,
};
