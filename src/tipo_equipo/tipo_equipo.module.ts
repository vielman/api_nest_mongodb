import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoEquipo, TipoEquipoSchema } from './schemas/tipo_euipo.schema';
import { TipoEquipoService } from './tipo_equipo.service';
import { TipoEquipoController } from './tipo_equipo.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TipoEquipo.name, schema: TipoEquipoSchema },
    ]),
  ],
  providers: [TipoEquipoService],
  controllers: [TipoEquipoController],
})
export class TipoEquipoModule {}
