import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

enum AppointmentType {
    Futbol = "Futbol",
    Tenis = "Tenis",
    Padel = "Padel",
    Baloncesto = "Baloncesto",
    Hockey = "Hockey",
    Golf = "Golf",
    Boxeo = "Boxeo",
    Natacion = "Natacion",
}

@Entity({ name: "appointments" })
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column({ type: "enum", enum: AppointmentType })
    type: AppointmentType;

    @Column({default: "active"})
    status: "active" | "cancelled";

    @ManyToOne(() => User, user => user.appointments)
    user: User
}

export default AppointmentType