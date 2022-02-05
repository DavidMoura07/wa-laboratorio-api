import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ExamsService } from '../services/exams.service';
import { CreateExamDto } from '../dto/create-exam.dto';
import { UpdateExamDto } from '../dto/update-exam.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Exam } from '../../database/entities/exam.entity';

@ApiTags('Exam')
@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post()
  @ApiOperation({ summary: 'Create Exam' })
  @ApiResponse({ status: 201, description: 'Created.' })
  create(@Body() createExamDto: CreateExamDto) {
    return this.examsService.create(createExamDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all active Exams' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Exam,
    isArray: true,
  })
  @ApiQuery({
    name: 'name',
    required: false,
  })
  findAll(@Query('name') name?: string) {
    return this.examsService.findAll({ isActive: true, name });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one Exam' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Exam,
  })
  findOne(@Param('id') id: string) {
    return this.examsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Exam' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Exam,
  })
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
    return this.examsService.update(+id, updateExamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Exam logicaly' })
  @ApiResponse({ status: 204, description: 'Deleted.' })
  remove(@Param('id') id: string) {
    return this.examsService.remove(+id);
  }

  @Post('link/:examId/laboratory/:laboratoryId')
  @ApiOperation({ summary: 'Associate an active exam to an active laboratory' })
  @ApiResponse({ status: 200, description: 'Associated.' })
  link(
    @Param('examId') examId: string,
    @Param('laboratoryId') laboratoryId: string,
  ) {
    return this.examsService.link(+examId, +laboratoryId);
  }

  @Post('unlink/:examId/laboratory/:laboratoryId')
  @ApiOperation({
    summary: 'Disassociate an active exam to an active laboratory',
  })
  @ApiResponse({ status: 200, description: 'Associated.' })
  unlink(
    @Param('examId') examId: string,
    @Param('laboratoryId') laboratoryId: string,
  ) {
    return this.examsService.unlink(+examId, +laboratoryId);
  }
}
