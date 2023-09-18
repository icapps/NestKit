import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export function validateConfig<T extends object>(config: ClassConstructor<T>) {
  const validatedConfig = plainToInstance(config, process.env, {
    enableImplicitConversion: true,
    excludeExtraneousValues: true,
    exposeDefaultValues: true,
  });

  const errors = validateSync(validatedConfig);

  if (errors.length) throw new Error(errors.toString());

  return validatedConfig;
}
