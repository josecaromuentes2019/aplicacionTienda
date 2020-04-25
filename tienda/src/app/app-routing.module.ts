import { NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CrearproductosComponent } from './crearproductos/crearproductos.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';

const routes: Routes = [

  { path:  '', component:  ListaProductosComponent},
  { path:  'listar', component:  ListaProductosComponent},
  { path:  'crear', component:  CrearproductosComponent},
  { path:  'editar', component:  EditarproductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
