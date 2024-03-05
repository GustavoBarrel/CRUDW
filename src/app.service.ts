import { Injectable } from '@nestjs/common';
import { Controller, Get, Post, Patch, Delete, Body, Param, NotFoundException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [
    { id: 1, nome: 'João Silva', cpf: '123.456.789-00', idade: 30 },
    { id: 2, nome: 'Maria Souza', cpf: '987.654.321-00', idade: 25 },
    { id: 3, nome: 'José Santos', cpf: '456.789.123-00', idade: 35 },
    { id: 4, nome: 'Ana Oliveira', cpf: '789.123.456-00', idade: 28 }
  ];


  findAll(): any {
    return this.users;
  }

  findOne(@Param('id') id: string): any {
    const user = this.users.find(user => user.id === parseInt(id));
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }
  create(@Body() newUser: any) {
    this.users.push(newUser);
    return newUser;
  }
  update(@Param('id') id: any, @Body() updatedUserInfo: any) {
    const userIndex = this.users.findIndex(user => user.id === parseInt(id, 10));
    if (userIndex === -1) {
      throw new NotFoundException('Usuário não encontrado');
    }
    this.users[userIndex] = { ...this.users[userIndex], ...updatedUserInfo };
    return this.users[userIndex];
  }
  remove(@Param('id') id: any) {
    const userIndex = this.users.findIndex(user => user.id === parseInt(id, 10));
    if (userIndex === -1) {
      throw new NotFoundException('Usuário não encontrado');
    }
    this.users.splice(userIndex, 1);
    return { message: 'Usuário removido com sucesso' };
  }
}
