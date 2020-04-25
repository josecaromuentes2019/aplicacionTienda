import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../Services/servicio.service';
import { Router } from '@angular/router';
import { Producto } from '../Modelo/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[];
  constructor(private sercios: ServicioService, private router: Router) { }

  ngOnInit() {
      this.sercios.getProductos()
      .subscribe(data => {
        this.productos = data;

      });

  }

  Editar(producto: Producto) {

    localStorage.setItem('id', producto['id'] + '');
    this.router.navigate(['editar']);

  }

 Eliminar(producto: Producto) {
    const id = producto['id'];
    const si = confirm('Desea eliminar el Producto con Id ' + id);
    if (si) {
    this.sercios.eliminarProductos(id)
    .subscribe(data => {

      this.productos = this.productos.filter( number => number !== producto );


     alert ('eliminado con exito!!');

    });
  }
  }
}
