import { Observable } from 'rxjs';

export interface SABOR {
    codigo?: string;
    producto?: string;
    image?: string;
    img?: Observable<string | null>;
    descripcion_corta?: string;
    descripcion_larga?: string;
    stock?: number;
    unidadMedida?: string;
    precioCompra?: number;
}
