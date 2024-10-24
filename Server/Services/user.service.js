import users from "../Models/users.models.js";

const getUsers = () => {
    return users;
};

const validateUser = ({name, age, mail}) => {
    let flag = true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Confirmar que es un correo

    if (!(age > 18 && age < 60)) flag = false;
    if (!regex.test(mail)) flag = false;

    return flag;
}

const addUser = ({ name, age, mail }) => {
    users.push({ name, age, mail });
};

export { getUsers, addUser, validateUser };