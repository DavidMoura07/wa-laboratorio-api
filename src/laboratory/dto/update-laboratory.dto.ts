import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateLaboratoryDto } from './create-laboratory.dto';

export class UpdateLaboratoryDto extends PartialType(CreateLaboratoryDto) {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  address?: string;
}
