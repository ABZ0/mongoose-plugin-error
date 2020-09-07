import { Controller, Post, Request, Body } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { Types } from 'mongoose';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  async createMedia(@Request() req, @Body() dto: CreateMediaDto) {
    const userId = Types.ObjectId('5f560e1238b85992c6d47706');
    const media = await this.mediaService.createOne({ ...dto, userId });

    return media;
  }
}
