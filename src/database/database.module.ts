import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { Laboratory } from './entities/laboratory.entity';
import { ExamsRepository } from './repositories/exams.repository';
import { LaboratoriesRepository } from './repositories/laboratories.repository';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmConfigService } from './services/TypeOrmConfig.service'
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      inject: [TypeOrmConfigService],
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
