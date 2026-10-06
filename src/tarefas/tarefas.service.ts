import { Injectable } from '@nestjs/common';
import { CriarTarefaDto } from './criar-tarefa.dto.js';
import { AtualizarTarefaDto } from './atualizar-tarefa.dto.js';
import { db } from '../prisma/db.js';

@Injectable()
export class TarefasService {
  
  async criar(dadosDaTarefa: CriarTarefaDto) {
    return await db.orm.public.Tarefa.create({
      titulo: dadosDaTarefa.titulo,
      descricao: dadosDaTarefa.descricao,
    });
  }

  async listarTodas() {
    return await db.orm.public.Tarefa.all();
  }

  async atualizar(id: string, dadosDeAtualizacao: AtualizarTarefaDto) {
    return await db.orm.public.Tarefa
      .where({ id: id })
      .update(dadosDeAtualizacao);
  }

  async remover(id: string) {
    return await db.orm.public.Tarefa
      .where({ id: id })
      .delete();
  }
}