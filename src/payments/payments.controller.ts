import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('/posts')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  async getPaymentsCotroller() {
    return await this.paymentsService.getPayments();
  }
  @Get(':id')
  async getOnePaymentController(@Param('id') id: string) {
    return await this.paymentsService.getOnePayment(+id);
  }
  @Post()
  async createPaymentController(
    @Body() body: { card_number: number; quantity: number },
  ) {
    return this.paymentsService.createPayment(body);
  }
  @Put(':id')
  async updatePayment(
    @Body() body: { card_number: number; quantity: number },
    @Param('id') id: string,
  ) {
    return this.paymentsService.updatePayment(body, +id);
  }
  @Delete(':id')
  async deletePayment(@Param('id') id: string) {
    return this.paymentsService.deletePayment(+id);
  }
}
