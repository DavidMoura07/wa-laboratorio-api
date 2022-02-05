import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export enum ExamTypes {
  CLINICAL_ANALYSIS = 'ANÁLISE CLINICA',
  IMAGE = 'IMAGEM',
}
export class CreateExamDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEnum(ExamTypes)
  @ApiProperty({
    enum: ['ANÁLISE CLINICA', 'IMAGEM'],
  })
  type: string;
}
