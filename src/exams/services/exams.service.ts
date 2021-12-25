import { Injectable } from '@nestjs/common';
import { ExamsRepository } from 'src/database/repositories/exams.repository';
import { CreateExamDto } from '../dto/create-exam.dto';
import { UpdateExamDto } from '../dto/update-exam.dto';

@Injectable()
export class ExamsService {

  constructor (
    private readonly examsRepository: ExamsRepository
  ) {}

  create(createExamDto: CreateExamDto) {
    return this.examsRepository.create({
      name: createExamDto.name,
      type: createExamDto.type
    });
  }

  findAll() {
    return this.examsRepository.findAll({ isActive: true });

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
}
