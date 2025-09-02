import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const contacts = await readContacts();
        const newContact = createFakeContact();
        const updatedContacts = [...contacts, newContact];
        await writeContacts(updatedContacts);
        console.log("Добавлен 1 контакт.");
    } catch (error) {
        console.error ("Ошибка при добавлении контакта:", error.message);
    }
};

addOneContact();