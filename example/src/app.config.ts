import { registerAs } from '@nestjs/config';
import { Environment, validateConfig } from '@icapps/nestkit-common';
import { Expose } from 'class-transformer';
import { IsEnum, IsPort, IsUrl } from 'class-validator';

class AppConfig {
  @Expose({ name: 'NODE_ENV' })
  @IsEnum(Environment)
  environment: Environment;

  @Expose({ name: 'PORT' })
  @IsPort()
  port: string;

  @Expose({ name: 'DATABASE_URL' })
  @IsUrl()
  databaseUrl: string;
}

export default registerAs('app', () => validateConfig(AppConfig));
