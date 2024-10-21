import { Module } from '@nestjs/common';
import { FastifyController } from './fastify.controller';
import { FastifyService } from './fastify.service';

@Module({
  imports: [],
  controllers: [FastifyController],
  providers: [FastifyService],
})
export class FastifyModule {}
