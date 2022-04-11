import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryColumn({ type: "uuid", name: "user_id" })
    userID!: string;

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
