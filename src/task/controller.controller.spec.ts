import { Test, TestingModule } from '@nestjs/testing';
import { Task\controllerController } from './task\controller.controller';

describe('Task\controllerController', () => {
  let controller: Task\controllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Task\controllerController],
    }).compile();

    controller = module.get<Task\controllerController>(Task\controllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
