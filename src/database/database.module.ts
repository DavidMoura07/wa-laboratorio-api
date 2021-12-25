import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laboratory } from './entities/laboratory.entity';
import { LaboratoriesRepository } from './repositories/laboratories.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'wa_laboratory',
      // entities: [Laboratory, Exam],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Laboratory])
  ],
  providers: [
    LaboratoriesRepository,
  ],
  exports: [
    LaboratoriesRepository,
  ]
})
export class DatabaseModule {}
