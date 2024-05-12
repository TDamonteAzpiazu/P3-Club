import { Router } from "express";
import { cancelAppointment, getAllAppointments, getAppointment, scheduleAppointment } from "../controllers/appointmentController";
import scheduleDataCheck from "../middlewares/schedule";

const appointmentRouter = Router();

appointmentRouter.get("/" , getAllAppointments)

appointmentRouter.get("/:id" , getAppointment)

appointmentRouter.post("/schedule" , scheduleDataCheck, scheduleAppointment)

appointmentRouter.put("/cancel/:id" , cancelAppointment)

export default appointmentRouter