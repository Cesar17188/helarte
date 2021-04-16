import { CLIENT } from './client.model';
import { Product } from './product.model';

export interface COMPROBANTE {
    cliente?: CLIENT;
    fecha?: any;
    products?: any[];
    total?: number;
}
