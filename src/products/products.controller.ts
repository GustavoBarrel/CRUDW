// src/products/products.controller.ts

import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) { }

  @Get()
  findAll(): any {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any): any {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() product: any): any {
    return this.productsService.create(product);
  }

  @Patch(':id')
  update(@Param('id') id: any, @Body() updatedProductInfo: any): any {
    return this.productsService.update(id, updatedProductInfo);
  }

  @Delete(':id')
  remove(@Param('id') id: any): any {
    return this.productsService.remove(id);
  }
}
