import { registerEnumType } from '@nestjs/graphql';

export enum PostMediaType {
  Picture = 'picture',
  Video = 'video',
}

registerEnumType(PostMediaType, {
  name: 'PostMediaType',
});
