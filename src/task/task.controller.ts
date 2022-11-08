import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('task/message')
  getSaludo(): string {
    return this.taskService.Saludar();
  }
  @Get('id')
  getById(@Param() uuid: string): string[] {
    return this.taskService.GetById(uuid);
  }

  @Post('create')
  CreateTask(@Param() user: string[] | undefined): string[] | undefined {
    if (user != undefined) {
      return this.taskService.CreateTask(user);
    }
    return undefined;
  }

  @Put('update')
  UpdateTask(@Param() user: string[] | undefined): string[] | undefined {
    if (user != undefined) {
      return this.taskService.UpdateTask(user);
    }
    return undefined;
  }

  @Delete('delete')
  DeleteTask(@Param() user: string[]): boolean {
    if (user != undefined) {
      return this.taskService.DeleteTask(user);
    }
    return false;
  }
}
