import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from '@icapps/nestkit-prisma';
import { Todo } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTodoDto): Promise<Todo> {
    return this.prisma.todo.create({ data });
  }

  findAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async findOne(id: number): Promise<Todo | null> {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.prisma.todo.update({ where: { id }, data: updateTodoDto });
  }

  remove(id: number): Promise<Todo> {
    return this.prisma.todo.delete({ where: { id } });
  }
}
