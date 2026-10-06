export class Tarefa {
  id: string; // O UUID que definimos no contrato
  titulo: string;
  descricao?: string; // O ponto de interrogação diz ao TypeScript que este campo é opcional
  concluida: boolean;
}