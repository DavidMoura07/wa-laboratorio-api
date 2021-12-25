import { Module } from '@nestjs/common';
import { ExamsService } from './services/exams.service';
import { ExamsController } from './controllers/exams.controller';

@Module({
  controllers: [ExamsController],
  providers: [ExamsService]
})
export class ExamsModule {}
