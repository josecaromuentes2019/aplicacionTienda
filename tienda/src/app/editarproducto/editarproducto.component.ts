import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../Services/servicio.service';
import { Producto } from '../Modelo/producto';


@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {

  constructor(private router: Router, private servicio: ServicioService) { }
  producto = new Producto(0, '', 0);
  ngOnInit() {
    this.Editar();
  }

  Editar() {
    const id = localStorage.getItem('id');
    console.log(id);
    this.servicio.getProductoId(+id).subscribe(data => {
      this.producto = data;
    });
  }

  Actualizar() {
    this.servicio.updateProducto(this.producto)
    .subscribe(data => {
      alert('Editado con exito!!');
      this.router.navigate(['listar']);

    });
  }

  Guardar() {
    this.servicio.crearProducto(this.producto)
    .subscribe(data => {
      alert('Agregado con exito!!');
      this.router.navigate(['listar']);

    });
  }

}
