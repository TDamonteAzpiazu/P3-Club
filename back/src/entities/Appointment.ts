import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "appointments" })
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: Date;

    @Column()
    userId: number;

    @Column()
    status: "active" | "cancelled";

    @ManyToOne(() => User, user => user.appointments)
    user: User
}