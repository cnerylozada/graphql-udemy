import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todos.entity';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './todos.dto';

@Resolver()
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query(() => [Todo])
  async getAllTodos() {
    return this.todosService.getAllTodos();
  }

  @Mutation(() => Todo)
  async saveTodo(@Args('newTodo') newTodo: CreateTodoDto) {
    return this.todosService.saveTask(newTodo);
  }
}
