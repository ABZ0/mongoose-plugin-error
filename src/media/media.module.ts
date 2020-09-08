import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Media, MediaSchema } from './models/media.model';
import { Connection } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Media.name,
        inject: [getConnectionToken()],
        useFactory: (connection: Connection) => {
          const schema = MediaSchema;
          // https://www.npmjs.com/package/mongoose-sequence  package used

          // Create record won't work when you uncomment blew plugin
          schema.plugin(require('mongoose-sequence')(connection), {
            id: 'media_seq',
            inc_field: 'order',
            reference_fields: ['userId', 'type'],
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [MediaService],
  controllers: [MediaController],
})
export class MediaModule {}
