import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
  } catch (error) {
    console.error('Error in starting', error);
  }
}
bootstrap().catch((error) => {
  console.error('Something is wrong: ', error);
});
