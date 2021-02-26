import { Observable } from 'rxjs';

export interface SYRUP {
    id?: string;
    codigo?: string;
    producto?: string;
    image?: string;
    img?: Observable<string | null>;
    descripcion_corta?: string;
    descripcion_larga?: string;
    stock?: number;
    unidadMedida?: string;
    precioCompra?: number;
    precioVenta?: number;
}
