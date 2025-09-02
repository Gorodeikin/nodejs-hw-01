import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        return contacts;
    } catch (error) {
        console.error("Ошибка при получении контактов:", error.message);
        return[];
    }
};

console.log(await getAllContacts());