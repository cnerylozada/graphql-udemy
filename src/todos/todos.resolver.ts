import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todos.entity';
import { TodosService } from './todos.service';

@Resolver()
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query(() => [Todo])
  async getAllTodos() {
    return this.todosService.getAllTodos();
  }
}
