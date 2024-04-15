import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { FruitEntity } from "./fruit.entity"

@Entity("user_cuongdeptrai")
export class UserEntity {
    //uuid laf grobal unique inder - no la khoa chinh tao tu dong ngau nhien va chac chan khong trung 
    @PrimaryGeneratedColumn("uuid")
        userId: string

    @Column({ type: "varchar", length: 50, default: null })
        email: string

    @Column({ type: "varchar", length: 64, default: null })
        password: string

        @Column({ type: "varchar", length: 100, default: null })
        firstName: string

        @Column({ type: "varchar", length: 64, default: null })
        lastName: string

        @OneToMany(() => FruitEntity, (fruit) => fruit.user )
        fruits: Array<FruitEntity>

}