import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  Saludar(): string {
    return 'Hola desde el servicio de Contacts';
  }
}
