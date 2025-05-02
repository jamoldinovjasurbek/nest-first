import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async getPayments() {
    return this.prisma.payments.findMany();
  }

  async getOnePayment(id: number) {
    return this.prisma.payments.findUnique({ where: { id } });
  }

  async createPayment(data: { card_number: number; quantity: number }) {
    return this.prisma.payments.create({ data });
  }

  async updatePayment(
    data: { card_number: number; quantity: number },
    id: number,
  ) {
    return this.prisma.payments.update({ where: { id }, data });
  }

  async deletePayment(id: number) {
    await this.prisma.payments.delete({ where: { id } });
    return { success: true, message: "Muvaffaqiyatli o'chirildi" };
  }
}
