import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto, UpdateTodoDto } from './todos.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  getAllTodos() {
    return this.todosRepository.find();
  }

  async getTodoById(todoId: number) {
    const todo = await this.todosRepository.findOneBy({ id: todoId });
    if (!todo) throw new NotFoundException(`Not found todo for id: ${todoId}`);
    return todo;
  }

  saveTask(task: CreateTodoDto) {
    const newTask = this.todosRepository.create(task);
    return this.todosRepository.save(newTask);
  }

  async updateTaskById(id: number, task: UpdateTodoDto) {
    const editedTask = await this.todosRepository.preload({ id, ...task });
    return this.todosRepository.save(editedTask);
  }
}
