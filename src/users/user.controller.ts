import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('users/message')
  getSaludo(): string {
    return this.userService.Saludar();
  }
  @Get('id')
  getById(@Param() uuid: string): string[] {
    return this.userService.GetById(uuid);
  }

  @Post('create')
  CreateUser(@Param() user: string[] | undefined): string[] | undefined {
    if (user != undefined) {
      return this.userService.CreateUser(user);
    }
    return undefined;
  }

  @Put('update')
  UpdateUser(@Param() user: string[] | undefined): string[] | undefined {
    if (user != undefined) {
      return this.userService.UpdateUser(user);
    }
    return undefined;
  }

  @Delete('delete')
  DeleteUser(@Param() user: string[]): boolean {
    if (user != undefined) {
      return this.userService.DeleteUser(user);
    }
    return false;
  }
}
