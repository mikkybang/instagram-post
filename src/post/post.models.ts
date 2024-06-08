import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from './entities/post.entity';

@ObjectType()
export class PaginatedPosts {
  @Field(() => Int)
  totalPage: number;

  @Field(() => Int)
  page: number;

  @Field(() => Int)
  limit: number;

  @Field(() => [Post])
  posts: Post[];
}
