import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(
          'https://lulaccesorios-b887d-default-rtdb.firebaseio.com/productos_idx.json'
        )
        .subscribe((resp: any) => {
          console.log(resp);
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });
  }
  getProducto(id: string) {
    return this.http.get(
      `https://lulaccesorios-b887d-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      //cargar productos
      this.cargarProductos().then(() => {
        //despues de terner los productos
        this.filtarProductos(termino);
      });
    } else {
      //se aplica el filtro
      this.filtarProductos(termino);
    }
  }
  private filtarProductos(termino: string) {
    console.log(this.productos);
    this.productosFiltrado=[];
    termino=termino.toLocaleLowerCase();

      this.productos.forEach(prod=>{
        
        const tituloLower=prod.categoria.toLocaleLowerCase();

        if(tituloLower.indexOf(termino)>=0 /* || tituloLower.indexOf(termino)<=0 */){
          this.productosFiltrado.push(prod);
        }

      })
  }
}
