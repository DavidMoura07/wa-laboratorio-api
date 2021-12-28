import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateLaboratoryDto } from './create-laboratory.dto';

export class UpdateLaboratoryBatchDto extends PartialType(CreateLaboratoryDto) {
  
  @IsNotEmpty()
  @IsInt()
  id: number;
  
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  address?: string;
}
