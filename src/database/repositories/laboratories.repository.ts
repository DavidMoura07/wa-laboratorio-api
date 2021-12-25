import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Laboratory } from '../entities/laboratory.entity';

@Injectable()
export class LaboratoriesRepository {

  constructor(
    @InjectRepository(Laboratory)
    private readonly repository: Repository<Laboratory>,
    private readonly connection: Connection
  ) {} 

  public async findById(id: number) {
    return this.repository.findOneOrFail(id); 
  }

  public async create(laboratory: Partial<Laboratory>) {
    return this.repository.save({
      ...laboratory,
      isActive: true
    });
  }

  public async findAll(parameters: Partial<Laboratory>) {
    return this.repository.find({
      where: parameters
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
}