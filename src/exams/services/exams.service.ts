import { Injectable } from '@nestjs/common';
import { Exam } from 'src/database/entities/exam.entity';
import { ExamsRepository } from 'src/database/repositories/exams.repository';
import { LaboratoriesRepository } from 'src/database/repositories/laboratories.repository';
import { CreateExamDto } from '../dto/create-exam.dto';
import { UpdateExamDto } from '../dto/update-exam.dto';

@Injectable()
export class ExamsService {

  constructor (
    private readonly examsRepository: ExamsRepository,
    private readonly laboratoriesRepository: LaboratoriesRepository,
  ) {}

  create(createExamDto: CreateExamDto) {
    return this.examsRepository.create({
      name: createExamDto.name,
      type: createExamDto.type
    });
  }

  findAll(filters: Partial<Exam>) {
    if(!filters.name){
      delete filters.name
    }
    return this.examsRepository.findAll(filters);

  }

  findOne(id: number) {
    return this.examsRepository.findById(id);
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return this.examsRepository.update(id, updateExamDto);
  }

  remove(id: number) {
    return this.examsRepository.remove(id);
  }

  async link(examId: number, laboratoryId: number) {
    const exam = await this.examsRepository.findById(examId);
    const laboratory = await this.laboratoriesRepository.findById(laboratoryId);
    
    if(exam.isActive && laboratory.isActive) {
      return await this.examsRepository.link(exam, laboratory)

    } else {
      throw new Error("Exam or Laboratory are inactives or does't exists.")
    }
  }

  async unlink(examId: number, laboratoryId: number) {
    const exam = await this.examsRepository.findById(examId);
    const laboratory = await this.laboratoriesRepository.findById(laboratoryId);
    
    if(exam.isActive && laboratory.isActive) {
      return await this.examsRepository.unlink(exam, laboratory)

    } else {
      throw new Error("Exam or Laboratory are inactives or does't exists.")
    }
  }

  // Batch actions
  createMany(createLaboratories: CreateExamDto[]) {
    return this.examsRepository.createMany(createLaboratories)
  }

  updateMany(updateLaboratories: UpdateExamDto[]) {
    return this.examsRepository.updateMany(updateLaboratories);
  }

  removeMany(laboratories: Partial<Exam>[]) {
    return this.examsRepository.removeMany(laboratories);
  }
  // End Batch actions
}
