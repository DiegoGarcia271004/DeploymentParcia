import { getUsers, addUser, validateUser } from "../Services/user.service.js";

const getUsersController = (req, res) => {
    const users = getUsers();
    res.json(users);
};

const addNewUserController = (req, res) => {
    const {name, age, mail} = req.body;

    if(validateUser(name, age, mail)){
        addUser(name, age, mail);
        res.redirect('http://localhost:5173');
        res.status(200).send();
    }
    else {
        res.redirect('http://localhost:5173');
        console.log('No');
        res.status(406).send();
    }
}

export {getUsersController, addNewUserController};