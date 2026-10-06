import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarefasService } from './tarefas.service.js';
import { CriarTarefaDto } from './criar-tarefa.dto.js';
import { AtualizarTarefaDto } from './atualizar-tarefa.dto.js';

@Controller('tarefas')
export class TarefasController {
  
  constructor(private readonly tarefasService: TarefasService) {}

  @Post()
  async criar(@Body() dadosDaTarefa: CriarTarefaDto) {
    return await this.tarefasService.criar(dadosDaTarefa);
  }

  @Get()
  async listarTodas() {
    return await this.tarefasService.listarTodas();
  }

  @Patch(':id')
  async atualizar(@Param('id') id: string, @Body() dadosDeAtualizacao: AtualizarTarefaDto) {
    return await this.tarefasService.atualizar(id, dadosDeAtualizacao);
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    return await this.tarefasService.remover(id);
  }
}