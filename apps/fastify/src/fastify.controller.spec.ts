import { Test, TestingModule } from '@nestjs/testing';
import { FastifyController } from './fastify.controller';
import { FastifyService } from './fastify.service';

describe('FastifyController', () => {
  let fastifyController: FastifyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FastifyController],
      providers: [FastifyService],
    }).compile();

    fastifyController = app.get<FastifyController>(FastifyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fastifyController.getHello()).toBe('Hello World!');
    });
  });
});
