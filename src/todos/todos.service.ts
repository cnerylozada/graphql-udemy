import { Injectable } from '@nestjs/common';
import { Todo } from './todos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './todos.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  getAllTodos() {
    return this.todosRepository.find();
  }

  saveTask(task: CreateTodoDto) {
    const newTask = this.todosRepository.create(task);
    return this.todosRepository.save(newTask);
  }
}
