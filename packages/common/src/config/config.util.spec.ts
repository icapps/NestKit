import 'reflect-metadata'; // https://github.com/nestjs/nest/issues/1305#issuecomment-440697498

import { Expose } from 'class-transformer';
import { IsNumber, IsBoolean } from 'class-validator';
import { validateConfig } from './config.util';

class MockConfig {
  @Expose({ name: 'FOO' })
  @IsNumber()
  foo: number;

  @Expose({ name: 'BAR' })
  @IsBoolean()
  bar = true;
}

describe('config.util.ts', () => {
  const originalEnv = process.env;

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('validateConfig', () => {
    it('should transform and return the config', () => {
      process.env = { ...process.env, FOO: '1' };

      expect(validateConfig(MockConfig)).toEqual({
        foo: 1,
        bar: true,
      });
    });

    it("should throw an error if the types don't match and are not explicitly convertable", () => {
      process.env = { ...process.env, FOO: 'string' };

      expect(() => validateConfig(MockConfig)).toThrowError();
    });

    it('should throw an error if a required property is not present', () => {
      process.env = { ...process.env, BAR: 'false' };

      expect(() => validateConfig(MockConfig)).toThrowError();
    });
  });
});
