import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

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
