import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`\tš server run on port:\t${process.env.PORT}`);
  console.log(`\tš® enter with:\t\thttp://localhost:${process.env.PORT}`);
  console.log();
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
}
bootstrap();
