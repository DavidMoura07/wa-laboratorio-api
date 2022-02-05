import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateExamDto, ExamTypes } from './create-exam.dto';

export class UpdateExamBatchDto extends PartialType(CreateExamDto) {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEnum(ExamTypes)
  @ApiProperty({
    enum: ['ANÁLISE CLINICA', 'IMAGEM'],
  })
  type?: string;
}
