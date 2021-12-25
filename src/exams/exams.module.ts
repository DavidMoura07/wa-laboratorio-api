import { Module } from '@nestjs/common';
import { ExamsService } from './services/exams.service';
import { ExamsController } from './controllers/exams.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ExamsController],
  providers: [ExamsService]
})
export class ExamsModule {}
