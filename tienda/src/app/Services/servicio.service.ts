import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  producto: Producto;
  constructor(private http: HttpClient) {
  }
  Url = 'http://localhost:3002/misproductos';

  getProductos() {
    return this.http.get<Producto[]>(this.Url);
  }

  crearProducto(producto: Producto) {
    return this.http.post<Producto>(this.Url, producto);
  }

  getProductoId(id: number) {
    return this.http.get<Producto>(this.Url + '/' + id);
  }

  updateProducto(producto: Producto) {
    return this.http.put<Producto>(this.Url + '/' + producto['id'] , producto);
  }

  eliminarProductos(id: number){
    return this.http.delete<Producto>(this.Url + '/' + id);
  }


}
