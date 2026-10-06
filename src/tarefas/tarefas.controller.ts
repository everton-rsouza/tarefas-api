import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarefasService } from './tarefas.service.js'; // <- Adicionado .js

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Post()
  async criar(@Body() dadosDaTarefa: any) {
    return await this.tarefasService.criar(dadosDaTarefa);
  }

  @Get()
  async listarTodas() {
    return await this.tarefasService.listarTodas();
  }

  @Get(':id')
  async buscarUm(@Param('id') id: string) {
    return await this.tarefasService.buscarUm(Number(id));
  }

  @Patch(':id')
  async atualizar(@Param('id') id: string, @Body() dadosDeAtualizacao: any) {
    return await this.tarefasService.atualizar(Number(id), dadosDeAtualizacao);
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    return await this.tarefasService.remover(Number(id));
  }
}