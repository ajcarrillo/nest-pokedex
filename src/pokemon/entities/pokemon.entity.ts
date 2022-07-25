import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Pokemon extends Document {
  @Prop({
    required: true,
    unique: true,
    index: true
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    index: true
  })
  no: number;
}

const PokemonSchema = SchemaFactory.createForClass(Pokemon);

PokemonSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  }
});

export default PokemonSchema;
