import { Controller, Get, Query, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {

  constructor(private readonly appService: AppService) { }

  @Get()
  findAll(): string {
    return this.appService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.appService.findOne(id); // Chame o método findOne do serviço e passe o id como argumento
  }
  @Post()
  create(@Body() user: any) {
    return this.appService.create(user); // Chame o método findOne do serviço e passe o id como argumento
  }
  @Patch(':id')
  update(@Param('id') id: any, @Body() updatedUserInfo: any) {
    return this.appService.update(id, updatedUserInfo); // Chame o método findOne do serviço e passe o id como argumento
  }
  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.appService.remove(id); // Chame o método findOne do serviço e passe o id como argumento
  }
}
