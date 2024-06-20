import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    role:string;
}
