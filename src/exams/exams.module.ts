import { Module } from '@nestjs/common';
import { ExamsService } from './services/exams.service';
import { ExamsController } from './controllers/exams.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ExamsBatchController } from './controllers/examsBatch.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ExamsController, ExamsBatchController],
  providers: [ExamsService],
})
export class ExamsModule {}
