import { Router } from "express";
import { cancelAppointment, getAllAppointments, getAppointment, scheduleAppointment } from "../controllers/appointmentController";

const appointmentRouter = Router();

appointmentRouter.get("/" , getAllAppointments)

appointmentRouter.get("/:id" , getAppointment)

appointmentRouter.post("/schedule" , scheduleAppointment)

appointmentRouter.put("/cancel" , cancelAppointment)

export default appointmentRouter