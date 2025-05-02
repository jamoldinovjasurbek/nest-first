import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('/posts')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async getCarsCotroller() {
    return await this.carsService.getCars();
  }
  @Get(':id')
  async getOneCarController(@Param('id') id: string) {
    return await this.carsService.getOneCar(+id);
  }
  @Post()
  async createCarController(
    @Body() body: { model: string; brand: string; year: number; price: number },
  ) {
    return this.carsService.createCar(body);
  }
  @Put(':id')
  async updateCarController(
    @Body()
    body: {
      model: string;
      brand: string;
      year: number;
      price: number;
    },
    @Param('id') id: string,
  ) {
    return this.carsService.updateCar(body, +id);
  }
  @Delete(':id')
  async deleteCarController(@Param('id') id: string) {
    return this.carsService.deleteCar(+id);
  }
}
