import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { MediaTypeEnum } from '../enum/media-type.enum';

/** Collection containing events invitations to artists */
@Schema({ timestamps: false })
export class Media {
  @Prop({ type: Types.ObjectId, index: true })
  userId: Types.ObjectId;
  @Prop()
  type: MediaTypeEnum;
  @Prop({ type: String })
  title: string;
  @Prop({ type: String })
  url: string;
  @Prop({ type: Number })
  order: number; // auto increment on create field
}
export const MediaSchema = SchemaFactory.createForClass(Media);
