import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Restaurant } from '../Restaurant/restaurant.entity';
import { Table } from '../Table/table.entity';

@Entity()
export class Hall {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('json')
  type: any;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.halls)
  restaurant: Restaurant;

  @OneToMany(() => Table, (table) => table.hall)
  tables: Table[];
}
