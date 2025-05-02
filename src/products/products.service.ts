import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProducts() {
    return this.prisma.products.findMany();
  }

  async getOneProduct(id: number) {
    return this.prisma.products.findUnique({ where: { id } });
  }

  async createProduct(data: {
    name: string;
    price: number;
    made_date: number;
    category_id: number;
  }) {
    return this.prisma.products.create({ data });
  }

  async updateProduct(
    data: {
      name: string;
      price: number;
      made_date: number;
      category_id: number;
    },
    id: number,
  ) {
    return this.prisma.products.update({ where: { id }, data });
  }

  async deleteProduct(id: number) {
    await this.prisma.products.delete({ where: { id } });
    return { success: true, message: "Muvaffaqiyatli o'chirildi" };
  }
}
