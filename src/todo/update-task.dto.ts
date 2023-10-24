import { Field, InputType } from '@nestjs/graphql';

@InputType('UpdateTaskInput')
export class UpdateTask {
  @Field({ nullable: true })
  completed: boolean;
}
