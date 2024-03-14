// src/users/users.controller.ts

import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll(): any {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any): any {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: any): any {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(@Param('id') id: any, @Body() updatedUserInfo: any): any {
    return this.usersService.update(id, updatedUserInfo);
  }

  @Delete(':id')
  remove(@Param('id') id: any): any {
    return this.usersService.remove(id);
  }
}
