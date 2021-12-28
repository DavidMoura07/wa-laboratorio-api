import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { CreateExamDto, ExamTypes } from './create-exam.dto';

export class UpdateExamDto extends PartialType(CreateExamDto) {
  
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEnum(ExamTypes)
  @ApiProperty({
    enum: ['ANÁLISE CLINICA', 'IMAGEM']
  })
  type?: string;
}
