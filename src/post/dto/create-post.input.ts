import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { PostMediaType } from '../post.enum';

@InputType()
export class CreatePostInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field({ nullable: true })
  @IsOptional()
  caption?: string;

  @Field(() => [PostMediaInput])
  @IsNotEmpty()
  @IsArray()
  media: PostMediaInput[];
}

@InputType()
class PostMediaInput {
  @Field(() => PostMediaType)
  type: PostMediaType;

  @Field(() => String)
  url: string;
}
