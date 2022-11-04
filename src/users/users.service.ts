import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  Saludar(): string {
    return 'Hola desde el servicio de Contacts';
  }
}
