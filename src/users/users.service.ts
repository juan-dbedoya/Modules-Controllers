import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  Usuario1: string[] = ['1', 'Juan Pablo', 'Davila', 'Juan@gmail.com'];
  Usuario2: string[] = ['3', 'Lorena', 'Sanchez', 'Lorsan@gmail.com'];
  Usuario3: string[] = ['4', 'Damaris', 'Henao', 'DamaHe@gmail.com'];
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

  CreateUser(newUser: string[] | undefined): string[] | undefined {
    if (newUser != undefined) {
      this.Usuarios.push(newUser);
      return newUser;
    }
    return undefined;
  }

  UpdateUser(user: string[] | undefined): string[] | undefined {
    if (user != undefined) {
      this.UserToUpdate = this.GetById(user[0]);
      this.indice = this.Usuarios.indexOf(this.UserToUpdate);
      this.Usuarios[this.indice] = user;
      return user;
    }
    return undefined;
  }

  DeleteUser(user: string[] | undefined): boolean {
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
