import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  docRef = this.firestore.collection('Productos');
  constructor(
    private firestore: AngularFirestore
  ) { }


  // tslint:disable-next-line: typedef
  public createProducto(data: Product) {
    return this.docRef.add(data);
  }


  // tslint:disable-next-line: typedef
  public getProducto(documentId: string) {
    return this.docRef.doc(documentId).snapshotChanges();
  }


  // tslint:disable-next-line: typedef
  public getProductos() {
    return this.firestore.collection('Productos', ref => ref.
           orderBy('codigo', 'asc')).snapshotChanges();
  }


  // tslint:disable-next-line: typedef
  public updateProducto(documentId: string, partialData: Partial<Product>){
    return this.docRef.doc(documentId).set(partialData);
  }


  // tslint:disable-next-line: typedef
  public deleteProduct(documentId: string) {
    this.docRef.doc(documentId).delete().then( () => {
      console.log('Producto Eliminado exitosamente!');
    }).catch((error) => {
      console.error('Error al eliminar el producto: ', error);
    });
  }
}
