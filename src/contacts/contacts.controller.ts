import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsrController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get('users/message')
  getSaludo(): string {
    return this.contactsService.Saludar();
  }
  @Get('id')
  getById(@Param() uuid: string): string[] {
    return this.contactsService.GetById(uuid);
  }
  @Post('create')
  CreateTask(@Param() user: string[] | undefined): string[] | undefined {
    if (user != undefined) {
      return this.contactsService.CreateContact(user);
    }
    
    return undefined;
  }
  @Put('update')
  UpdateTask(@Param() user: string[] | undefined): string[] | undefined {
    if (user != undefined) {
      return this.contactsService.UpdateContact(user);
    }
    return undefined;
  }
  @Delete('delete')
  DeleteTask(@Param() user: string[]): boolean {
    if (user != undefined) {
      return this.contactsService.DeleteContact(user);
    }
    return false;
  }
}
