import { Injectable } from '@nestjs/common';
import { db } from '../prisma/db'; 

@Injectable()
export class TarefasService {
  
  async criar(dadosDaTarefa: any) {
    // Envolvemos a entidade inteira em 'as any' para calar o TypeScript
    return await (db.orm.public.Tarefa as any).create({
      titulo: dadosDaTarefa.titulo,
      descricao: dadosDaTarefa.descricao,
    });
  }

  async listarTodas() {
    return await (db.orm.public.Tarefa as any).findMany();
  }

  // Mantivemos o buscarUm/findOne caso o seu Controller precise buscar por ID
  async buscarUm(id: number) {
    return await (db.orm.public.Tarefa as any).findUnique({
      where: { id: Number(id) },
    });
  }

  async atualizar(id: number, dadosDaTarefa: any) {
    return await (db.orm.public.Tarefa as any).update({
      where: { id: Number(id) },
      data: dadosDaTarefa,
    });
  }

  async remover(id: number) {
    return await (db.orm.public.Tarefa as any).delete({
      where: { id: Number(id) },
    });
  }
}