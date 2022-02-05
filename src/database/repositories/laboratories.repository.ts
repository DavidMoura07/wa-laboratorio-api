import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Laboratory } from '../entities/laboratory.entity';

@Injectable()
export class LaboratoriesRepository {
  constructor(
    @InjectRepository(Laboratory)
    private readonly repository: Repository<Laboratory>,
    private readonly connection: Connection,
  ) {}

  public async findById(id: number) {
    return this.repository.findOneOrFail(id);
  }

  public async create(laboratory: Partial<Laboratory>) {
    return this.repository.save({
      ...laboratory,
      isActive: true,
    });
  }

  public async findAll(parameters: Partial<Laboratory>) {
    return this.repository.find({
      where: parameters,
    });
  }

  public async update(id: number, laboratory: Partial<Laboratory>) {
    await this.repository.update(id, laboratory);
    return await this.repository.findOne(id);
  }

  public async remove(id: number) {
    await this.repository.update(id, { isActive: false });
    return await this.repository.findOne(id);
  }

  // Batch Actions
  public async createMany(laboratories: Partial<Laboratory>[]) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const laboratory of laboratories) {
        await queryRunner.manager.save(Laboratory, laboratory);
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  public async updateMany(laboratories: Partial<Laboratory>[]) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const laboratory of laboratories) {
        await queryRunner.manager.update(Laboratory, laboratory.id, laboratory);
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  public async removeMany(laboratories: Partial<Laboratory>[]) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const laboratory of laboratories) {
        await queryRunner.manager.update(Laboratory, laboratory.id, {
          isActive: false,
        });
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
