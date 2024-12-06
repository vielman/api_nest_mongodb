import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoEquipoModule } from './tipo_equipo/tipo_equipo.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pevjose:1NBFJwXrX1jrtfGZ@cluster0.hatrzgr.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0',
    ),
    TipoEquipoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
