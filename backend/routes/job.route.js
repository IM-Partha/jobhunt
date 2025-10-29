import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJob, getAlljob, getJobById, postJob } from "../controller/job.controller.js";

const jobRouter = express.Router();

jobRouter.route("/post").post(isAuthenticated, postJob);
jobRouter.route("/get").get(isAuthenticated, getAlljob);
jobRouter.route("/getadminjobs").get(isAuthenticated, getAdminJob);
jobRouter.route("/get/:id").get(isAuthenticated, getJobById);

export default jobRouter;
