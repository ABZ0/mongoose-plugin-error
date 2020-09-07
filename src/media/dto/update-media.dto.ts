import { IsString, IsOptional } from 'class-validator';

export class UpdateMediaDto {
  @IsOptional()
  @IsString()
  title: string;
}
