import { Injectable } from '@nestjs/common';
import { Media } from './models/media.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel(Media.name) readonly injectedModel: Model<Document>,
  ) {}

  async createOne(dto) {
    return await this.injectedModel.create(dto);
  }
}
