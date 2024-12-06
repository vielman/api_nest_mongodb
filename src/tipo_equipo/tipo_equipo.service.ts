import { Injectable } from '@nestjs/common';
import { TipoEquipo } from './schemas/tipo_euipo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationQueryDto } from './schemas/pagination-query.dto';

@Injectable()
export class TipoEquipoService {
  constructor(
    @InjectModel(TipoEquipo.name) private tipoEquipotModel: Model<TipoEquipo>,
  ) {}

  async findAll({ limit, offset }: PaginationQueryDto): Promise<TipoEquipo[]> {
    return await this.tipoEquipotModel.find().skip(offset).limit(limit).exec();
  }

  async findOne(id: string): Promise<TipoEquipo> {
    return await this.tipoEquipotModel.findById(id).exec();
  }

  async create(tipoEquipo: TipoEquipo): Promise<TipoEquipo> {
    const newPost = new this.tipoEquipotModel(tipoEquipo);
    return await newPost.save();
  }

  async update(id: string, tipoEquipo: TipoEquipo): Promise<TipoEquipo> {
    return await this.tipoEquipotModel.findByIdAndUpdate(id, tipoEquipo, {
      new: true,
    });
  }

  async delete(id: string): Promise<TipoEquipo> {
    return await this.tipoEquipotModel.findByIdAndDelete(id);
  }
}
