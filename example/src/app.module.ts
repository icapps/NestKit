import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TodosModule } from './todos/todos.module';
import appConfig from './app.config';

@Module({
  imports: [ConfigModule.forRoot({ load: [appConfig] }), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
