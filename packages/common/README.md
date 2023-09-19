# `@icapps/nestkit-common`

Common utilities, enums, constants,...

## Installation

```bash
npm install @icapps/nestkit-common
```

## Usage

### Utilities

#### validateConfig(config)

```typescript
// app.config.ts

...
import { validateConfig } from '@icapps/nestkit-common';

class AppConfig {
  @Expose({ name: 'NODE_ENV' })
  @IsEnum(Environment)
  environment: Environment;

  @Expose({ name: 'PORT' })
  @IsPort()
  port: string;
}

export default registerAs('app', () => validateConfig(AppConfig));
```

### Enums

#### Environment

```typescript
enum Environment {
  Local = 'local',
  Development = 'development',
  Staging = 'staging',
  Production = 'production',
  Test = 'test',
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](LICENSE)
