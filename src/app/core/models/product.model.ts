// interface del modelo de product

import { Observable } from 'rxjs';
import { FRUTA } from './fruta.model';
import { SABOR } from './sabor.model';
import { SYRUP } from './syrup.model';
import { TOPPING } from './topping.model';

export interface Product {
    codigo?: string;
    producto?: string;
    sabores?: SABOR[];
    crema?: SYRUP;
    syrups?: SYRUP[];
    toppingsD?: TOPPING;
    toppingsS?: TOPPING[];
    fruta?: FRUTA[];
    leche?: boolean;
    image?: string;
    img?: Observable<string | null>;
    bebida?: string;
    backerie?: string;
    snack?: string;
    descripcion_corta?: string;
    descripcion_larga?: string;
    stock?: number;
    unidadMedida?: string;
    precioCompra?: number;
    precioVenta?: number;
    userUid?: string;
}

