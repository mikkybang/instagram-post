import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { PostService } from '../post/post.service';
import { faker } from '@faker-js/faker';
import { PostMediaType } from '../post/post.enum';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const postService = app.get(PostService);

  Logger.log('seeding data');
  for (let i = 0; i < 50; i++) {
    const randomMediaAmount = faker.number.int({ min: 1, max: 10 });
    const media = [];
    for (let k = 0; k < randomMediaAmount; k++) {
      media.push({
        url: faker.internet.url(),
        type: faker.helpers.arrayElement([
          PostMediaType.Video,
          PostMediaType.Picture,
        ]),
      });
    }
    await postService.create({
      userId: faker.string.uuid(),
      media,
      caption: faker.lorem.sentence({ min: 0, max: 20 }),
    });
  }
  Logger.log('done seeding');

  await app.close();
}

bootstrap();
