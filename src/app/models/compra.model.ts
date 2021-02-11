import { ItensEntity } from '../models/itens-entity.model';

export class Compra {

        id: number;
        data: string;
        fornecedor: string;
        itens?: (ItensEntity)[] | null;
        valorTotal: number;
  
      
}
