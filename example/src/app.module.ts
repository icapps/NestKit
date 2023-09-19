import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TodosModule } from './todos/todos.module';
import appConfig from './app.config';
import { PrismaModule } from '@icapps/nestkit-prisma';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [appConfig] }),
    PrismaModule,
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
