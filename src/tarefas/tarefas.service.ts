import { Injectable } from '@nestjs/common';
import { db } from '../prisma/db'; // Verifica se o caminho do import está correto para o seu projeto

@Injectable()
export class TarefasService {
  
  async create(dadosDaTarefa: any) {
    // Bypass (as any) adicionado para ignorar a exigência do ID manual
    return await db.orm.public.Tarefa.create({
      titulo: dadosDaTarefa.titulo,
      descricao: dadosDaTarefa.descricao,
    } as any);
  }

  async findAll() {
    return await db.orm.public.Tarefa.findMany();
  }

  async findOne(id: number) {
    return await db.orm.public.Tarefa.findUnique({
      where: { id },
    });
  }

  async update(id: number, dadosDaTarefa: any) {
    return await db.orm.public.Tarefa.update({
      where: { id },
      data: dadosDaTarefa,
    } as any);
  }

  async remove(id: number) {
    return await db.orm.public.Tarefa.delete({
      where: { id },
    });
  }
}