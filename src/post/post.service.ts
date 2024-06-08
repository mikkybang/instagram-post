import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post, PostMedia } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(PostMedia)
    private readonly postMediaRepository: Repository<PostMedia>,
  ) {}

  async create(createPostInput: CreatePostInput) {
    if (createPostInput?.media.length < 1) {
      throw new BadRequestException('no media added to post');
    }

    const post = new Post();
    post.userId = createPostInput.userId;
    post.caption = createPostInput.caption;
    post.media = createPostInput.media;

    const savedPost = await this.postRepository.save(post);
    return savedPost;
  }

  findAll() {
    return [{ exampleField: 1 }];
  }

  async findOne(id: string) {
    const post = await this.postRepository.findOne({ where: { id } });
    return post;
  }

  async update(id: string, updatePostInput: UpdatePostInput) {
    const existingPostCount = await this.postRepository.count({
      where: { id },
    });
    if (existingPostCount < 1)
      throw new BadRequestException('Post Id is invalid');
    await this.postRepository.update(
      { id },
      { caption: updatePostInput.caption },
    );
    const updatedPost = await this.findOne(id);
    return updatedPost;
  }

  async remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
