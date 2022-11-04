import { Test, TestingModule } from '@nestjs/testing';
import { Users\controllerController } from './users\controller.controller';

describe('Users\controllerController', () => {
  let controller: Users\controllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Users\controllerController],
    }).compile();

    controller = module.get<Users\controllerController>(Users\controllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
