import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../Services/servicio.service';
import { Producto } from '../Modelo/producto';

@Component({
  selector: 'app-crearproductos',
  templateUrl: './crearproductos.component.html',
  styleUrls: ['./crearproductos.component.css']
})
export class CrearproductosComponent implements OnInit {

  constructor(private router: Router, private servicio: ServicioService) {
  }
  producto = new Producto(0, '', 0);

  ngOnInit() {
  }

  Guardar() {
    this.servicio.crearProducto(this.producto)
    .subscribe(data => {
      alert('Agregado con exito!!');
      this.router.navigate(['listar']);

    });
  }

}
