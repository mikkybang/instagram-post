import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdatePostInput {
  @Field(() => String)
  @IsNotEmpty()
  id: string;

  @Field(() => String)
  @IsOptional()
  caption?: string;
}
