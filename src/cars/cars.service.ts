import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}

  async getCars() {
    return this.prisma.cars.findMany();
  }

  async getOneCar(id: number) {
    return this.prisma.cars.findUnique({ where: { id } });
  }

  async createCar(data: {
    model: string;
    brand: string;
    year: number;
    price: number;
  }) {
    return this.prisma.cars.create({ data });
  }

  async updateCar(
    data: {
      model: string;
      brand: string;
      year: number;
      price: number;
    },
    id: number,
  ) {
    return this.prisma.cars.update({ where: { id }, data });
  }

  async deleteCar(id: number) {
    await this.prisma.cars.delete({ where: { id } });
    return { success: true, message: "Muvaffaqiyatli o'chirildi" };
  }
}
