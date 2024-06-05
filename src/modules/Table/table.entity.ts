import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Hall } from '../Hall/hall.entity';

@Entity()
export class Table {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;

  @ManyToOne(() => Hall, (hall) => hall.tables)
  hall: Hall;
}
