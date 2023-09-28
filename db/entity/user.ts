import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length:50 , nullable:false })
    username: string

    @Column({ nullable:false })
    password: string


}
