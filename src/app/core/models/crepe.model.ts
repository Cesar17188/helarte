import { Observable } from 'rxjs';
import { FRUTA } from './fruta.model';
import { SABOR } from './sabor.model';
import { SYRUP } from './syrup.model';
import { TOPPING } from './topping.model';

export interface CREPE {
    codigo?: string;
    producto?: string;
    sabores?: SABOR[];
    syrups?: SYRUP[];
    crema?: SYRUP;
    toppingsD?: TOPPING;
    toppingsS?: TOPPING[];
    fruta?: FRUTA[];
    image?: string;
    img?: Observable<string | null>;
    descripcion_corta?: string;
    descripcion_larga?: string;
    precioVenta?: number;
}
