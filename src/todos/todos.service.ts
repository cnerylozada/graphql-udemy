import { Injectable } from '@nestjs/common';
import { Todo } from './todos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  getAllTodos() {
    return this.todosRepository.find();
  }
}
