import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoryController } from './laboratory.controller';
import { LaboratoryService } from '../services/laboratory.service';

describe('LaboratoryController', () => {
  let controller: LaboratoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaboratoryController],
      providers: [LaboratoryService],
    }).compile();

    controller = module.get<LaboratoryController>(LaboratoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
