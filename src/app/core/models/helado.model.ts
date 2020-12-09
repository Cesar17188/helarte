import { Observable } from 'rxjs';
import { SABOR } from './sabor.model';
import { SYRUP } from './syrup.model';
import { TOPPING } from './topping.model';

export interface HELADO {
    codigo?: string;
    producto?: string;
    sabores?: SABOR[];
    syrups?: SYRUP[];
    crema?: SYRUP;
    toppingsD?: TOPPING;
    image?: string;
    img?: Observable<string | null>;
    descripcion_corta?: string;
    descripcion_larga?: string;
    precioVenta?: number;
}
