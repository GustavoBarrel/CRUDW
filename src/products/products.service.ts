// src/products/products.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, product_name: 'Produto 1', valor: 10.99, estoque: 100 },
    { id: 2, product_name: 'Produto 2', valor: 20.49, estoque: 50 },
    { id: 3, product_name: 'Produto 3', valor: 15.75, estoque: 200 },
    { id: 4, product_name: 'Produto 4', valor: 30.00, estoque: 75 }
  ];

  findAll(): any {
    return this.products;
  }

  findOne(id: string): any {
    const product = this.products.find(product => product.id === parseInt(id));
    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }
    return product;
  }

  create(newProduct: any): any {
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: any, updatedProductInfo: any): any {
    const productIndex = this.products.findIndex(product => product.id === parseInt(id, 10));
    if (productIndex === -1) {
      throw new NotFoundException('Produto não encontrado');
    }
    this.products[productIndex] = { ...this.products[productIndex], ...updatedProductInfo };
    return this.products[productIndex];
  }

  remove(id: any): any {
    const productIndex = this.products.findIndex(product => product.id === parseInt(id, 10));
    if (productIndex === -1) {
      throw new NotFoundException('Produto não encontrado');
    }
    this.products.splice(productIndex, 1);
    return { message: 'Produto removido com sucesso' };
  }
}
