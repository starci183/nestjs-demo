import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type DeptraiEntityDocument = HydratedDocument<DeptraiEntity>;

@Schema({
    collection: "deptraiqua"
})
export class DeptraiEntity {
    @Prop()
        cuong: string

    @Prop()
        ho: string

    @Prop()
        ten: string
}

export const DeptraiEntitySchema = SchemaFactory.createForClass(DeptraiEntity)