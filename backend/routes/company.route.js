import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controller/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const comapnyRouter = express.Router();

comapnyRouter.route("/register").post(isAuthenticated, registerCompany);
comapnyRouter.route("/get").get(isAuthenticated, getCompany);
comapnyRouter.route("/get/:id").get(isAuthenticated, getCompanyById);
comapnyRouter.route("/update/:id").put(isAuthenticated,singleUpload ,updateCompany);

export default comapnyRouter;
