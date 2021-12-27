import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { Laboratory } from './entities/laboratory.entity';
import { ExamsRepository } from './repositories/exams.repository';
import { LaboratoriesRepository } from './repositories/laboratories.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'wa_laboratory',
      // entities: [Laboratory, Exam],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      Laboratory, 
      Exam,
    ]),
  ],
  providers: [
    LaboratoriesRepository,
    ExamsRepository
  ],
  exports: [
    LaboratoriesRepository,
    ExamsRepository,
  ]
})
export class DatabaseModule {}
