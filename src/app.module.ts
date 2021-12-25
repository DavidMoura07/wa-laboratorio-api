import { Module } from '@nestjs/common';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { ExamsModule } from './exams/exams.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    LaboratoryModule, 
    ExamsModule,
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {
}
