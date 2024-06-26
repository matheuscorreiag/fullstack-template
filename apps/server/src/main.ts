import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from 'src/trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpc = app.get(TrpcRouter);
  await trpc.applyMiddleware(app);
  await app.listen(4000);

  console.log('🚀 Server started at http://localhost:4000');
}
bootstrap();
