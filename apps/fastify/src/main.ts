import { NestFactory } from '@nestjs/core';
import { FastifyModule } from './fastify.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(FastifyModule, new FastifyAdapter());
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
