import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todos.entity';
import { TodosService } from './todos.service';
import { CreateTodoDto, OptionalsArgs, UpdateTodoDto } from './todos.dto';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query(() => [Todo])
  async getAllTodos(@Args() optionals: OptionalsArgs) {
    return this.todosService.getAllTodos(optionals);
  }

  @Query(() => Todo)
  getTodoById(@Args('id', { type: () => Int }) id: number) {
    return this.todosService.getTodoById(id);
  }

  @Mutation(() => Todo)
  async saveTodo(@Args('newTodo') newTodo: CreateTodoDto) {
    return this.todosService.saveTask(newTodo);
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Args('id', { type: () => Int }) id: number,
    @Args('editedTask') task: UpdateTodoDto,
  ) {
    return this.todosService.updateTaskById(id, task);
  }
}
