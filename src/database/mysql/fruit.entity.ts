import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { UserEntity } from "./user.entity"

@Entity("fruit")
export class FruitEntity {
    //uuid laf grobal unique inder - no la khoa chinh tao tu dong ngau nhien va chac chan khong trung 
    @PrimaryGeneratedColumn("uuid")
        fruitId: string

    @Column({ type: "varchar", length: 50, default: null })
        fruitName: string

    @ManyToOne(() => UserEntity,  (user) => user.fruits)
    @JoinColumn({ name: "userId" })
    user: UserEntity
}