import { Module } from '@nestjs/common';
import { TodosController } from './todo/todo.controller';
import { TodosService } from './todos/todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService]
})
export class AppModule {}