import { ApiHideProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Exam } from './exam.entity';

@Entity('laboratories')
export class Laboratory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ default: true })
  isActive: boolean;

  @ApiHideProperty()
  @ManyToMany(() => Exam, exam => exam.laboratories, { cascade: false })
  exams: Exam[];

}