import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        console.log("Все контакты удалены.");
    } catch (error) {
        console.error("Ошибка при удалении контактов:", error.message);
    }
};

removeAllContacts();