import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TipoEquipoService } from './tipo_equipo.service';
import { TipoEquipo } from './schemas/tipo_euipo.schema';

@Controller('tipo-equipo')
export class TipoEquipoController {
  constructor(private readonly tipoEquipoService: TipoEquipoService) {}

  @Get()
  async findAll(): Promise<TipoEquipo[]> {
    return await this.tipoEquipoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TipoEquipo> {
    return await this.tipoEquipoService.findOne(id);
  }

  @Post()
  async create(@Body() tipoEquipo: TipoEquipo): Promise<TipoEquipo> {
    return await this.tipoEquipoService.create(tipoEquipo);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() tipoEquipo: TipoEquipo,
  ): Promise<TipoEquipo> {
    return await this.tipoEquipoService.update(id, tipoEquipo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TipoEquipo> {
    return await this.tipoEquipoService.delete(id);
  }
}
