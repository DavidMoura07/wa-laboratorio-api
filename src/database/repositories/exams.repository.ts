import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Exam } from '../entities/exam.entity';
import { Laboratory } from '../entities/laboratory.entity';

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

  public async link(exam: Exam, laboratory: Laboratory) {

    if( exam.laboratories.map(x => x.id).includes(laboratory.id) ){
      return exam;
    } else {
      exam.laboratories.push(laboratory);
    }

    return await this.repository.save(exam);
  }

  public async unlink(exam: Exam, laboratory: Laboratory) {
    exam.laboratories = exam.laboratories.filter(x => x.id !== laboratory.id)
    return await this.repository.save(exam);
  }

  // Batch Actions
  public async createMany(exams: Partial<Exam>[]) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for(const exam of exams) {
        await queryRunner.manager.save(Exam, exam);
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  public async updateMany(exams: Partial<Exam>[]) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for(const exam of exams) {
        await queryRunner.manager.update(Exam, exam.id, exam);
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  public async removeMany(exams: Partial<Exam>[]) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for(const exam of exams) {
        await queryRunner.manager.update(Exam, exam.id, { isActive: false });
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
  // End Batch actions
}