import { Router } from "express";
import { cancelAppointment, getAllAppointments, getAppointment, scheduleAppointment } from "../controllers/appointmentController";

const appointmentRouter = Router();

appointmentRouter.get("/" , getAllAppointments)

appointmentRouter.get("/appointment" , getAppointment)

appointmentRouter.post("/appointment/schedule" , scheduleAppointment)

appointmentRouter.put("/appointment/cancel" , cancelAppointment)

export default appointmentRouter