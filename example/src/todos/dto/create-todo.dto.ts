import { IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  description: string;
}
