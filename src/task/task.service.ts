import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  Saludar(): string {
    return 'Hola desde el servicio de Task';
  }
}
