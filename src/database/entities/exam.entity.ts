import { Laboratory } from './laboratory.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('exams')
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Laboratory)
  @JoinTable({ name: 'exams_laboratories' })
  laboratories: Laboratory[];
}