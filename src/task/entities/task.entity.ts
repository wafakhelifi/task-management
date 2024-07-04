/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn("uuid")
  // @Column({ type: 'varchar', length: 30 })
  id: string;

  @Column({ type: 'varchar', length: 30 })
  title: string;

  @Column({ type: 'varchar', length: 15 })
  description: string;

  @Column({ type: 'varchar', length: 15 })
  status: string;

}