// colaboradores/colaboradores.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ColaboradoresService {
  private colaboradores = [
    { id: 1, matricula: 'A001', cpf: '123.456.789-00', idade: 30, nome: 'João', sobrenome: 'Silva' },
    { id: 2, matricula: 'A002', cpf: '987.654.321-00', idade: 25, nome: 'Maria', sobrenome: 'Souza' },
    { id: 3, matricula: 'A003', cpf: '456.789.123-00', idade: 35, nome: 'José', sobrenome: 'Santos' },
    { id: 4, matricula: 'A004', cpf: '789.123.456-00', idade: 28, nome: 'Ana', sobrenome: 'Oliveira' }
  ];

  findAll(): any {
    return this.colaboradores;
  }

  findOne(id: string): any {
    const colaborador = this.colaboradores.find(colaborador => colaborador.id === parseInt(id));
    if (!colaborador) {
      throw new NotFoundException('Colaborador não encontrado');
    }
    return colaborador;
  }

  create(newColaborador: any): any {
    this.colaboradores.push(newColaborador);
    return newColaborador;
  }

  update(id: any, updatedColaboradorInfo: any): any {
    const colaboradorIndex = this.colaboradores.findIndex(colaborador => colaborador.id === parseInt(id, 10));
    if (colaboradorIndex === -1) {
      throw new NotFoundException('Colaborador não encontrado');
    }
    this.colaboradores[colaboradorIndex] = { ...this.colaboradores[colaboradorIndex], ...updatedColaboradorInfo };
    return this.colaboradores[colaboradorIndex];
  }

  remove(id: any): any {
    const colaboradorIndex = this.colaboradores.findIndex(colaborador => colaborador.id === parseInt(id, 10));
    if (colaboradorIndex === -1) {
      throw new NotFoundException('Colaborador não encontrado');
    }
    this.colaboradores.splice(colaboradorIndex, 1);
    return { message: 'Colaborador removido com sucesso' };
  }
}
