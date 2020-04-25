import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioService } from './Services/servicio.service';
import { CrearproductosComponent } from './crearproductos/crearproductos.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    CrearproductosComponent,
    EditarproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
