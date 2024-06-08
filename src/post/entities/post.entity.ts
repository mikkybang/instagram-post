import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostMediaType } from '../post.enum';

@ObjectType()
@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Post Id' })
  id?: string;

  @Column({ type: 'varchar', length: '50' })
  @Field(() => String)
  userId: string;

  @Column({ type: 'varchar', length: '150', nullable: true })
  @Field(() => String)
  caption?: string;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;

  @OneToMany(() => PostMedia, (media) => media.post, {
    eager: true,
    cascade: true,
  })
  @Field(() => [PostMedia])
  media: PostMedia[];
}

@ObjectType()
@Entity()
export class PostMedia {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Post Media Id' })
  id?: string;

  @Column({ type: 'varchar' })
  @Field(() => String)
  url: string;

  @Column({ type: 'enum', enum: PostMediaType })
  @Field(() => PostMediaType, { description: 'Post Media Type' })
  type: PostMediaType;

  @Column()
  @Field(() => String)
  postId?: string;

  @ManyToOne(() => Post, (post) => post.media)
  post?: Post[];
}
