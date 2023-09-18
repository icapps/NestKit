import { registerAs } from '@nestjs/config';
import { Environment, validateConfig } from '@nestkit/common';
import { Expose } from 'class-transformer';
import { IsEnum, IsPort } from 'class-validator';

class AppConfig {
  @Expose({ name: 'NODE_ENV' })
  @IsEnum(Environment)
  environment: Environment;

  @Expose({ name: 'PORT' })
  @IsPort()
  port: string;
}

export default registerAs('app', () => validateConfig(AppConfig));
