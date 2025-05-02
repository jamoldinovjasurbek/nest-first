import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/posts')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProductsController() {
    return await this.productsService.getProducts();
  }
  @Get(':id')
  async getOneProductController(@Param('id') id: string) {
    return await this.productsService.getOneProduct(+id);
  }
  @Post()
  async createProductController(
    @Body()
    body: {
      name: string;
      price: number;
      made_date: number;
      category_id: number;
    },
  ) {
    return this.productsService.createProduct(body);
  }
  @Put(':id')
  async updateProductController(
    @Body()
    body: {
      name: string;
      price: number;
      made_date: number;
      category_id: number;
    },
    @Param('id') id: string,
  ) {
    return this.productsService.updateProduct(body, +id);
  }
  @Delete(':id')
  async deleteProductController(@Param('id') id: string) {
    return this.productsService.deleteProduct(+id);
  }
}
