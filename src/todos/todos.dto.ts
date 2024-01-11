import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @Field()
  task: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @Field()
  description: string;
}

@InputType()
export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @MinLength(10)
  @Field(() => String, { nullable: true })
  task?: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  @Field(() => String, { nullable: true })
  description?: string;
}
