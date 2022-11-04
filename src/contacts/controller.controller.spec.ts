import { Test, TestingModule } from '@nestjs/testing';
import { Contacts\controllerController } from './contacts\controller.controller';

describe('Contacts\controllerController', () => {
  let controller: Contacts\controllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Contacts\controllerController],
    }).compile();

    controller = module.get<Contacts\controllerController>(Contacts\controllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
