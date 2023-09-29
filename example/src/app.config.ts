import { registerAs } from '@nestjs/config';
import { Environment, validateConfig } from '@icapps/nestkit-common';
import { Expose } from 'class-transformer';
import { IsEnum, IsPort, IsString } from 'class-validator';

class AppConfig {
  @Expose({ name: 'NODE_ENV' })
  @IsEnum(Environment)
  environment: Environment;

  @Expose({ name: 'PORT' })
  @IsPort()
  port: string;

  @Expose({ name: 'DATABASE_URL' })
  @IsString()
  databaseUrl: string;
}

export default registerAs('app', () => validateConfig(AppConfig));
