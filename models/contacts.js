const { nanoid } = require("nanoid");

const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "././contacts.json");

const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async() => {
 const data = await fs.readFile(contactsPath)
 return JSON.parse(data)
}

const getContactById = async(id) => {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === id.toString())

    return result || null
}

const addContact = async ({id, name, email, phone}) => {
    const contacts = await listContacts();

    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    }

    contacts.push(newContact)

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return newContact;
}

const updateById = async (contactId, { name, email, phone }) => {
  const id = String(contactId);
  
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, name, email, phone };
  await updateContacts(contacts);
  return contacts[index];
};

const removeContact = async (id) => {
    const contacts = await listContacts();

    const index = contacts.findIndex(item => item.id == id);

    if(index == -1) {
        return null;
    }

    const [result] = contacts.splice(index, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))

    return result
}


module.exports = {
    listContacts,
    getContactById,
    addContact,
    updateById,
    removeContact,
}