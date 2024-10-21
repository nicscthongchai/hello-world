import { Controller, Get } from '@nestjs/common';
import { FastifyService } from './fastify.service';

@Controller()
export class FastifyController {
  constructor(private readonly fastifyService: FastifyService) {}

  @Get()
  getHello(): string {
    return this.fastifyService.getHello();
  }
}
