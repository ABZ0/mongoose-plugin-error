import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { MediaTypeEnum } from '../enum/media-type.enum';

export class CreateMediaDto {
  @IsEnum(MediaTypeEnum)
  type: MediaTypeEnum;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  url: string;
}
