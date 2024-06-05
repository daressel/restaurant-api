import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Company } from '../Company/company.entity';
import { Hall } from '../Hall/hall.entity';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column('time')
  openingTime: Date;

  @Column('time')
  closingTime: Date;

  @Column()
  name: string;

  @ManyToOne(() => Company, (company) => company.restaurants)
  company: Company;

  @OneToMany(() => Hall, (hall) => hall.restaurant)
  halls: Hall[];
}
