import { Observable } from 'rxjs';
import { FRUTA } from './fruta.model';
import { SABOR } from './sabor.model';

export interface SHAKE {
    codigo?: string;
    producto?: string;
    leche?: boolean;
    sabor?: SABOR[];
    fruta?: FRUTA[];
    precioVenta?: number;
    descripcion_corta?: string;
    descripcion_larga?: string;
    image?: string;
    img?: Observable<string | null>;
}
