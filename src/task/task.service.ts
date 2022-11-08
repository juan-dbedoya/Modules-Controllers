import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  Usuario1: string[] = ['11', '1', 'Tarea1'];
  Usuario2: string[] = ['33', '2', 'Tarea2'];
  Usuario3: string[] = ['44', '3', 'Tarea3'];
  UserToUpdate: string[];
  indice: number;

  Usuarios: string[][] = [this.Usuario1, this.Usuario2, this.Usuario3];

  Saludar(): string {
    return 'Hola desde el servicio de Task';
  }

  GetById(uuid?: string): string[] {
    this.Usuarios.forEach(function (usuario) {
      if (usuario[0] == uuid) return usuario;
    });
    return ['No existe'];
  }

  CreateTask(newUser: string[] | undefined): string[] | undefined {
    if (newUser != undefined) {
      this.Usuarios.push(newUser);
      return newUser;
    }
    return undefined;
  }

  UpdateTask(user: string[] | undefined): string[] | undefined {
    if (user != undefined) {
      this.UserToUpdate = this.GetById(user[0]);
      this.indice = this.Usuarios.indexOf(this.UserToUpdate);
      this.Usuarios[this.indice] = user;
      return user;
    }
    return undefined;
  }

  DeleteTask(user: string[] | undefined): boolean {
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
