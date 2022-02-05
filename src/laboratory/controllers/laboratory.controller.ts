import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LaboratoryService } from '../services/laboratory.service';
import { CreateLaboratoryDto } from '../dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from '../dto/update-laboratory.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Laboratory } from 'src/database/entities/laboratory.entity';

@ApiTags('Laboratory')
@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create Laboratory' })
  @ApiResponse({ status: 201, description: 'Created.' })
  async create(@Body() createLaboratoryDto: CreateLaboratoryDto) {
    return await this.laboratoryService.create(createLaboratoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all active Laboratories' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Laboratory,
    isArray: true,
  })
  findAll() {
    return this.laboratoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one Laboratory' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Laboratory,
  })
  findOne(@Param('id') id: string) {
    return this.laboratoryService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Laboratory' })
  @ApiBody({ type: UpdateLaboratoryDto })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Laboratory,
  })
  update(
    @Param('id') id: string,
    @Body() updateLaboratoryDto: UpdateLaboratoryDto,
  ) {
    return this.laboratoryService.update(+id, updateLaboratoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Laboratory logicaly' })
  @ApiResponse({ status: 204, description: 'Deleted.' })
  remove(@Param('id') id: string) {
    return this.laboratoryService.remove(+id);
  }
}
