import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateComapny } from "../controller/company.controller.js";

const comapnyRouter = express.Router();

comapnyRouter.route("/register").post(isAuthenticated, registerCompany);
comapnyRouter.route("/get").get(isAuthenticated, getCompany);
comapnyRouter.route("/get/:id").get(isAuthenticated, getCompanyById);
comapnyRouter.route("/update/:id").put(isAuthenticated, updateComapny);

export default comapnyRouter;
