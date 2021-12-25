import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

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
}