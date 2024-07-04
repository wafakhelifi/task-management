/* eslint-disable prettier/prettier */
import {
    IsAlphanumeric,
    IsEnum,
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';
import { TaskStatus } from '../entities/task-status.entity';
  
  export class CreateTaskDto {
    @IsString()
    @MinLength(2, { message: 'Title must have atleast 2 characters.' })
    @IsNotEmpty()
    title: string;
  
    @IsNotEmpty()
    @MinLength(3, { message: 'Description must have atleast 3 characters.' })
    @IsAlphanumeric(null, {
      message: 'Username does not allow other than alpha numeric chars.',
    })
    description: string;
  
    @IsNotEmpty()
    @IsEnum(TaskStatus)
    status: string;
  }
