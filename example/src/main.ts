import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigType } from '@nestjs/config';
import appConfig from './app.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get<ConfigType<typeof appConfig>>(appConfig.KEY);

  // Swagger
  const swaggerDocumentBuilder = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('Example description')
    .setVersion('1.0')
    .addTag('todos', 'Everything related to todos')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerDocumentBuilder,
  );
  SwaggerModule.setup('swagger', app, swaggerDocument);

  await app.listen(config.port);
}
bootstrap();
