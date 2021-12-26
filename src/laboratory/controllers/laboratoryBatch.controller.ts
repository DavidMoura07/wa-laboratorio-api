import { Controller, Post, Body, Patch, Delete, HttpCode } from '@nestjs/common';
import { LaboratoryService } from '../services/laboratory.service';
import { CreateLaboratoryDto } from '../dto/create-laboratory.dto';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Laboratory } from 'src/database/entities/laboratory.entity';
import { UpdateLaboratoryBatchDto } from '../dto/update-laboratory-batch.dto';

@ApiTags('Laboratory - Batch Actions')
@Controller('laboratoryBatch')
export class LaboratoryBatchController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create Laboratories' })
  @ApiBody({ type: CreateLaboratoryDto, isArray: true })
  @ApiResponse({ status: 201, description: 'Created.' })
  async create(@Body() laboratories: CreateLaboratoryDto[]) {
    return await this.laboratoryService.createMany(laboratories);
  }

  @Patch()
  @ApiOperation({ summary: 'Update Laboratories' })
  @ApiBody({ type: UpdateLaboratoryBatchDto, isArray: true })
  @ApiResponse({
    status: 204,
    description: 'The records updated',
  })
  @HttpCode(204)
  update(@Body() laboratories: UpdateLaboratoryBatchDto[]) {
    return this.laboratoryService.updateMany(laboratories);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete Laboratories logicaly' })
  @ApiBody({ type: UpdateLaboratoryBatchDto, isArray: true })
  @ApiResponse({ status: 204, description: 'Deleted.' })
  @HttpCode(204)
  remove(@Body() laboratories: UpdateLaboratoryBatchDto[]) {
    return this.laboratoryService.removeMany(laboratories);
  }
}
