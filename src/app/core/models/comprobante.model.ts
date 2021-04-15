import { Product } from './product.model';

export interface COMPROBANTE {
    identification?: string;
    fecha?: any;
    products?: Product[];
    total?: number;
}
