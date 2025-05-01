import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async getPosts() {
    return this.prisma.posts.findMany();
  }

  async getOnePost(id: number) {
    return this.prisma.posts.findUnique({ where: { id } });
  }

  async createPost(data: { name: string; price: number; image: string }) {
    return this.prisma.posts.create({ data });
  }

  async updatePost(
    data: { name: string; price: number; image: string },
    id: number,
  ) {
    return this.prisma.posts.update({ where: { id }, data });
  }

  async deletePost(id: number) {
    await this.prisma.posts.delete({ where: { id } });
    return { success: true, message: "Muvaffaqiyatli o'chirildi" };
  }
}
