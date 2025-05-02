import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getPostsController() {
    return await this.postsService.getPosts();
  }
  @Get(':id')
  async getOnePostController(@Param('id') id: string) {
    return await this.postsService.getOnePost(+id);
  }
  @Post()
  async createPostController(
    @Body() body: { name: string; price: number; image: string },
  ) {
    return this.postsService.createPost(body);
  }
  @Put(':id')
  async updatePostController(
    @Body() body: { name: string; price: number; image: string },
    @Param('id') id: string,
  ) {
    return this.postsService.updatePost(body, +id);
  }
  @Delete(':id')
  async deletePostController(@Param('id') id: string) {
    return this.postsService.deletePost(+id);
  }
}
