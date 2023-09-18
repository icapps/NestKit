import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigType } from '@nestjs/config';
import appConfig from './app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get<ConfigType<typeof appConfig>>(appConfig.KEY);

  await app.listen(config.port);
}
bootstrap();
