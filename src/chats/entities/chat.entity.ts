import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('chats')
export class ChatEntity {
  @PrimaryGeneratedColumn()
  chatId: number;

  @Column({ name: 'owner', type: 'numeric' })
  owner: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToMany(() => UserEntity, (user) => user.chats)
  users: UserEntity[];

  @CreateDateColumn({
    type: 'timestamp without time zone',
    name: 'created_at',
  })
  public createdAt: Date;
}