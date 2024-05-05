import IUser from "./IUser";

interface IAppointment {
    id: number;
    date: Date;
    time: Date;
    userId: IUser["id"];
    status: "active" | "cancelled"
}

export default IAppointment