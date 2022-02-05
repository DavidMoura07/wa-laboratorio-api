import {
  Controller,
  Post,
  Body,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateExamDto } from '../dto/create-exam.dto';
import { UpdateExamBatchDto } from '../dto/update-exam-batch.dto';
import { ExamsService } from '../services/exams.service';

@ApiTags('Exams - Batch Actions')
@Controller('ExamsBatch')
export class ExamsBatchController {
  constructor(private readonly examsService: ExamsService) {}

  @Post()
  @ApiOperation({ summary: 'Create Exams' })
  @ApiBody({ type: CreateExamDto, isArray: true })
  @ApiResponse({ status: 201, description: 'Created.' })
  async create(@Body() laboratories: CreateExamDto[]) {
    return await this.examsService.createMany(laboratories);
  }

  @Patch()
  @ApiOperation({ summary: 'Update Exams' })
  @ApiBody({ type: UpdateExamBatchDto, isArray: true })
  @ApiResponse({
    status: 204,
    description: 'The records updated',
  })
  @HttpCode(204)
  update(@Body() laboratories: UpdateExamBatchDto[]) {
    return this.examsService.updateMany(laboratories);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete Exams logicaly' })
  @ApiBody({ type: UpdateExamBatchDto, isArray: true })
  @ApiResponse({ status: 204, description: 'Deleted.' })
  @HttpCode(204)
  remove(@Body() laboratories: UpdateExamBatchDto[]) {
    return this.examsService.removeMany(laboratories);
  }
}
