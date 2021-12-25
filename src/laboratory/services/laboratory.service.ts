import { Injectable } from '@nestjs/common';
import { LaboratoriesRepository } from '../../database/repositories/laboratories.repository';
import { CreateLaboratoryDto } from '../dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from '../dto/update-laboratory.dto';

@Injectable()
export class LaboratoryService {

  constructor(
    private readonly laboratoriesRepository: LaboratoriesRepository,
  ) {} 

  create(createLaboratoryDto: CreateLaboratoryDto) {
    return 'This action adds a new laboratory';
  }

  findAll() {
    return `This action returns all laboratory`;
  }

  findOne(id: number) {
    return this.laboratoriesRepository.findById(id);
  }

  update(id: number, updateLaboratoryDto: UpdateLaboratoryDto) {
    return `This action updates a #${id} laboratory`;
  }

  remove(id: number) {
    return `This action removes a #${id} laboratory`;
  }
}
