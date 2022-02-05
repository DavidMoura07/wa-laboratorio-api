import { Module } from '@nestjs/common';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { ExamsModule } from './exams/exams.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.example.env'],
      isGlobal: true,
    }),
    DatabaseModule,
    LaboratoryModule,
    ExamsModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
