import { getUsersController, addNewUserController } from "../Controllers/user.controller.js";
import express from "express";
const router = express.Router();

router.get('/users', getUsersController);
router.post('/users', addNewUserController);

export default router;

