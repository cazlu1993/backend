import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  createOne(text: string) {
    const task = this.taskRepository.create({ text });

    return this.taskRepository.save(task);
  }

  async getOne(id: Task['id']) {
    const task = await this.taskRepository.findOneBy({ id });

    if (!task) throw new NotFoundException('Task not exist');

    return task;
  }

  listAll() {
    return this.taskRepository.find();
  }

  async updateOne(
    id: Task['id'],
    completed: boolean,
  ) {
    return this.taskRepository.save({id, completed});
  }

  async removeOne(id: Task['id']) {
    const task = await this.getOne(id);

    await this.taskRepository.delete({ id });

    return task;
  }
}
