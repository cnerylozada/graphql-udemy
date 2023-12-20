import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  task: string;

  @Column({ type: 'boolean', default: false })
  @Field((type) => Boolean)
  isDone: boolean;
}
