/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
// import { TasksModule } from './tasks/tasks.module';
import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'task-management',
      port: 5432,
      username: 'postgres',
      password: 'root',
      // entities: [Task], // here we have added user enitity in entities array
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    // TasksModule, // old
    TaskModule, // c lorigine
  ],
  
})
export class AppModule {}
