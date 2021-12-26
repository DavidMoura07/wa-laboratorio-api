import { PartialType } from '@nestjs/mapped-types';
import { CreateLaboratoryDto } from './create-laboratory.dto';

export class UpdateLaboratoryBatchDto extends PartialType(CreateLaboratoryDto) {
  id: number;
  name?: string;
  address?: string;
}
