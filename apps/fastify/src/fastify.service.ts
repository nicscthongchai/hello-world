import { Injectable } from '@nestjs/common';

@Injectable()
export class FastifyService {
  getHello(): string {
    return 'Hello World!';
  }
}
