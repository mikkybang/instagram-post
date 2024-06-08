import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Post Id' })
  id: string;

  @Column()
  userId: string;

  @Column()
  caption?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => PostMedia, (media) => media.post)
  media: PostMedia;
}

export class PostMedia {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Post Media Id' })
  id: string;

  @Column()
  @Field(() => String)
  url: string;

  @Column()
  @Field(() => String)
  type: string;

  @Column()
  postId: string;

  @ManyToOne(() => Post, { eager: true })
  post: Post[];
}
