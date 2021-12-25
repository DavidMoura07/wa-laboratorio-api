import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Exam } from '../entities/exam.entity';

@Injectable()
export class ExamsRepository {

  constructor(
    @InjectRepository(Exam)
    private readonly repository: Repository<Exam>,
    private readonly connection: Connection
  ) {} 

  public async findById(id: number) {
    return this.repository.findOneOrFail(id); 
  }

  public async create(laboratory: Partial<Exam>) {
    return this.repository.save({
      ...laboratory,
      isActive: true
    });
  }

  public async findAll(parameters: Partial<Exam>) {
    return this.repository.find({
      where: parameters
    }); 
}

  public async update(id: number, laboratory: Partial<Exam>) {
    await this.repository.update(id, laboratory);
    return await this.repository.findOne(id);
  }

  public async remove(id: number) {
    await this.repository.update(id, { isActive: false });
    return await this.repository.findOne(id);
  }
}