// colaboradores/colaboradores.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { ColaboradoresController } from './colaboradores.controller';
import { ColaboradoresService } from './colaboradores.service';

describe('ColaboradoresController', () => {
  let controller: ColaboradoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColaboradoresController],
      providers: [ColaboradoresService],
    }).compile();

    controller = module.get<ColaboradoresController>(ColaboradoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

