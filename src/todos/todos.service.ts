import { Injectable, NotFoundException } from '@nestjs/common';

export interface Todo {
    id: number;
    title: string;
    status: 'pending' | 'done';
}

@Injectable()
export class TodosService {
    private todos: Todo[] = [

        { id: 1, title: 'windah hambatusauda', status: 'pending' },
        { id: 2, title: 'ilahm josep', status: 'done' },
    ];


    findAll(): Todo[] {
        return this.todos;
    }

    findOne(id: number): Todo {
        const todo = this.todos.find((item) => item.id === id);
        if (!todo) throw new NotFoundException(`Todo dengan ID ${id} tidak ditemukan`);
        return todo;
    }

    create(title: string, status: 'pending' | 'done'): Todo {
        const newTodo: Todo ={
            id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1,
            title,
            status
        };
        this.todos.push(newTodo);
        return newTodo;
    }

    update(id: number, title: string, status: 'pending' | 'done'): Todo {
        const todo = this.findOne(id);
        todo.title = title;
        todo.status = status;
        return todo;
    }

    remove(id: number): void {
        const index = this.todos.findIndex((item) => item.id === id);
        if (index === -1) throw new NotFoundException(`Todo dengan ID ${id} tidak ditemukan`);
        this.todos.splice(index, 1);
    }
}