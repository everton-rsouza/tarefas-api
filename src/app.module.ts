import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas/tarefas.controller.js';
import { TarefasService } from './tarefas/tarefas.service.js';

@Module({
  imports: [],
  controllers: [TarefasController], // Registramos o Controller
  providers: [TarefasService],      // Registramos o Service
})
export class AppModule {} 