import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @Field()
  task: string;
}
