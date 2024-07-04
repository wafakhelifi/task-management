/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  /**
   * this is function is used to create Task in Task Entity.
   * @param createTaskDto this will type of createTaskDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of task
   */
  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task: Task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.status = createTaskDto.status;
    return this.taskRepository.save(task);
  }

  /**
   * this function is used to get all the task's list
   * @returns promise of array of tasks
   */
  findAllTask(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  /**
   * this function used to get data of use whose id is passed in parameter
   * @param id is type of number, which represent the id of task.
   * @returns promise of task
   */
  async viewTask(id: string): Promise<Task> {
    const foundTask = await this.taskRepository.findOneBy({ id });
    if (!foundTask) throw new NotFoundException("Task not found with id : " + id);
    return foundTask;
  }

  /**
   * this function is used to updated specific task whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of task.
   * @param updateTaskDto this is partial type of createTaskDto.
   * @returns promise of udpate task
   */
  updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task: Task = new Task();
    task.id = id;
    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    task.status = updateTaskDto.status;
    return this.taskRepository.save(task);
  }

  /**
   * this function is used to remove or delete task from database.
   * @param id is the type of number, which represent id of task
   * @returns nuber of rows deleted or affected
   */
  removeTask(id: string){
    return this.taskRepository.delete(id);
  }
}