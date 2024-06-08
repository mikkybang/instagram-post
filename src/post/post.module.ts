import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post, PostMedia } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostMedia])],
  providers: [PostResolver, PostService],
})
export class PostModule {}
