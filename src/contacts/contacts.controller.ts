import { Controller, Get } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsrController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get('users/message')
  getSaludo(): string {
    return this.contactsService.Saludar();
  }
}
