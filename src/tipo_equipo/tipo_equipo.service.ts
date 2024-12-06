import { Injectable } from '@nestjs/common';
import { TipoEquipo } from './schemas/tipo_euipo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TipoEquipoService {
  constructor(
    @InjectModel(TipoEquipo.name) private tipoEquipotModel: Model<TipoEquipo>,
  ) {}

  async findAll() {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const data = await this.tipoEquipotModel.find().exec();
    const entero = Math.ceil(data.length / 4);
    const response = {
      success: true,
      data: {
        data: data,
        total: data.length,
        page: 1,
        limit: 4,
        hasNext: true,
        hasPrev: true,
        next: 0,
        prev: 0,
        pages: entero,
        last: 0,
        first: 0,
      },
      timestamp: timestamp,
    };
    return response;
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
