# `@nestkit/common`

This package contains common utilities, enums, constants,...

## API

### Utilities

#### validateConfig(config)

```typescript
// app.config.ts

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
