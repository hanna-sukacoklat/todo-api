import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe} from '@nestjs/common';
import { TodosService } from '../todos/todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    getAllTodos() {
        return this.todosService.findAll();
    }

    @Get(':id')
    getTodoById(@Param('id', ParseIntPipe) id: number) {
        return this.todosService.findOne(id);
    }

    @Post()
    createTodo(@Body('title') title: string, @Body('status') status: 'pending' | 'done'){
        return this.todosService.create(title, status);    }

    @Put(':id')
    updateTodo(
        @Param('id', ParseIntPipe) id: number,
        @Body('title') title: string,
        @Body('status') status: 'pending' | 'done',
    ) {
        return this.todosService.update(id, title, status);
    }

    @Delete(':id')
    removeTodo(@Param('id', ParseIntPipe) id: number): void {
        this.todosService.remove(id);
    }
}