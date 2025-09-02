import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length === 0) return;

        contacts.pop();
        await writeContacts(contacts);
        console.log("Последний контакт удалён.");
    } catch (error) {
        console.error("Ошибка при удалении последнего контакта:",error.message); 
    }
};

removeLastContact();