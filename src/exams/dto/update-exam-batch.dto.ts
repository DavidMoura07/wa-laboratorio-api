import { PartialType } from '@nestjs/mapped-types';
import { CreateExamDto } from './create-exam.dto';

export class UpdateExamBatchDto extends PartialType(CreateExamDto) {
  id: number;
  name?: string;
  type?: string;
}
