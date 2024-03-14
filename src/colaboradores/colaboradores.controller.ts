// colaboradores/colaboradores.controller.ts

import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';

@Controller('colaboradores')
export class ColaboradoresController {

  constructor(private readonly colaboradoresService: ColaboradoresService) { }

  @Get()
  findAll(): any {
    return this.colaboradoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any): any {
    return this.colaboradoresService.findOne(id);
  }

  @Post()
  create(@Body() colaborador: any): any {
    return this.colaboradoresService.create(colaborador);
  }

  @Patch(':id')
  update(@Param('id') id: any, @Body() updatedColaboradorInfo: any): any {
    return this.colaboradoresService.update(id, updatedColaboradorInfo);
  }

  @Delete(':id')
  remove(@Param('id') id: any): any {
    return this.colaboradoresService.remove(id);
  }
}
