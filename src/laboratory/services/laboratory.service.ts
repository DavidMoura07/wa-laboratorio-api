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
    return this.laboratoriesRepository.create(createLaboratoryDto)
  }

  findAll() {
    return this.laboratoriesRepository.findAll({ isActive: true });
  }

  findOne(id: number) {
    return this.laboratoriesRepository.findById(id);
  }

  update(id: number, updateLaboratoryDto: UpdateLaboratoryDto) {
    return this.laboratoriesRepository.update(id, updateLaboratoryDto);
  }

  remove(id: number) {
    return this.laboratoriesRepository.remove(id);
  }
}
