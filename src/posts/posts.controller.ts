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
  async getPosts() {
    return await this.postsService.getPosts();
  }
  @Get(':id')
  async getOnePost(@Param('id') id: string) {
    return await this.postsService.getOnePost(+id);
  }
  @Post()
  async createPost(
    @Body() body: { name: string; price: number; image: string },
  ) {
    return this.postsService.createPost(body);
  }
  @Put(':id')
  async updatePost(
    @Body() body: { name: string; price: number; image: string },
    @Param('id') id: string,
  ) {
    return this.postsService.updatePost(body, +id);
  }
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(+id);
  }
}
