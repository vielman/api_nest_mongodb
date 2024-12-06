import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TipoEquipo {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  fechaactivacion?: Date;

  @Prop()
  fechadesactivacion?: Date;

  @Prop()
  username?: string;
}

export const TipoEquipoSchema = SchemaFactory.createForClass(TipoEquipo);
