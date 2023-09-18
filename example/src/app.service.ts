import { Inject, Injectable } from '@nestjs/common';
import appConfig from './app.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject(appConfig.KEY)
    private config: ConfigType<typeof appConfig>,
  ) {}

  getHello(): string {
    return `Hello World from ${this.config.environment}!`;
  }
}
