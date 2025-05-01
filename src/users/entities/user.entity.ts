import { ReportEntity } from '../../reports/entities/report.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ReportEntity, (report) => report.user)
  reports: ReportEntity[];

  @AfterInsert()
  logInsert() {
    console.log('New User Inserted');
  }

  @AfterUpdate()
  logUpdate() {
    console.log('User Updated');
  }

  @AfterRemove()
  logRemove() {
    console.log('User Removed');
  }
}
