import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  Usuario1: string[] = [
    '5',
    '1',
    'Juan Pablo',
    'Davila',
    '123456',
    'Juan@gmail.com',
  ];
  Usuario2: string[] = [
    '6',
    '2',
    'Lorena',
    'Sanchez',
    '54321',
    'Lorsan@gmail.com',
  ];
  Usuario3: string[] = [
    '7',
    '3',
    'Damaris',
    'Henao',
    '764982',
    'DamaHe@gmail.com',
  ];
  UserToUpdate: string[];
  indice: number;

  Usuarios: string[][] = [this.Usuario1, this.Usuario2, this.Usuario3];

  Saludar(): string {
    return 'Hola desde el servicio de Contacts';
  }

  GetById(uuid?: string): string[] {
    this.Usuarios.forEach(function (usuario) {
      if (usuario[0] == uuid) return usuario;
    });
    return ['No existe'];
  }

  CreateContact(newUser: string[] | undefined): string[] | undefined {
    if (newUser != undefined) {
      this.Usuarios.push(newUser);
      return newUser;
    }
    return undefined;
  }

  UpdateContact(user: string[] | undefined): string[] | undefined {
    if (user != undefined) {
      this.UserToUpdate = this.GetById(user[0]);
      this.indice = this.Usuarios.indexOf(this.UserToUpdate);
      this.Usuarios[this.indice] = user;
      return user;
    }
    return undefined;
  }

  DeleteContact(user: string[] | undefined): boolean {
    if (user != undefined) {
      this.UserToUpdate = this.GetById(user[0]);
      if (this.UserToUpdate[0] != 'No existe') {
        this.indice = this.Usuarios.indexOf(this.UserToUpdate);
        this.Usuarios.splice(this.indice, this.indice + 1);
        return true;
      }
      return false;
    }
    return false;
  }

}
