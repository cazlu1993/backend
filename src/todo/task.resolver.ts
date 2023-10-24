import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Task } from './task.entity';
import { TaskService } from './task.service';
import { UpdateTask } from './update-task.dto';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => Task)
  addTask(@Args('text') text: string) {
    return this.taskService.createOne(text);
  }

  @Query(() => [Task])
  tasks() {
    return this.taskService.listAll();
  }

  @Mutation(() => Task)
  updateTask(
    @Args('id', { type: () => ID }) id: Task['id'],
    @Args('completed') completed : boolean,
  ) {
    return this.taskService.updateOne(id, completed);
  }

  @Mutation(() => Task)
  deleteTask(@Args('id', { type: () => ID }) id: Task['id']) {
    return this.taskService.removeOne(id);
  }
}
