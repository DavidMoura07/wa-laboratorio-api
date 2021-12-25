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
}