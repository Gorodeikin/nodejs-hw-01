import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    try {
        const contscts = await readContacts();
        const newContacts = Array.from({ length: number }, () => createFakeContact());
        const updatedContacts = [...contscts, ...newContacts];
        await writeContacts(updatedContacts);
        console.log(`Добавлено ${number} контактов.`);
    } catch (error) {
        console.error("Ошибка при генерации контактов:", error.message);
    } 
};

generateContacts(5);