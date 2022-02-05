import { Module } from '@nestjs/common';
import { LaboratoryService } from './services/laboratory.service';
import { LaboratoryController } from './controllers/laboratory.controller';
import { DatabaseModule } from '../database/database.module';
import { LaboratoryBatchController } from './controllers/laboratoryBatch.controller';

@Module({
  imports: [DatabaseModule],
  providers: [LaboratoryService],
  controllers: [LaboratoryController, LaboratoryBatchController],
})
export class LaboratoryModule {}
