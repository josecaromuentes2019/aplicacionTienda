/**
 * @author Jose caro
 * 
 */

import { Controller, Post , Body, Get, Put, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import { CrearProductoDto } from './dto/crear-producto-dto';
import { MisproductosService } from './misproductos.service';


@Controller('misproductos')
export class MisproductosController {


    constructor(private productoService: MisproductosService){}

    /**
     * 
     * @param productoDto 
     * @description Servicio para agregar productos
     */

    @Post()
    crearProducto(@Body() productoDto: CrearProductoDto, @Res() response) {
      this.productoService.createProductos(productoDto).then(respuesta=>{
        response.status(HttpStatus.CREATED).json(respuesta);
      }).catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({mensaje:'Ocurrio un error'});
      });
    }

   
    /**
     * 
     * @description Servicio para listar Productos
     */
    @Get()
    listarAllProductos(@Res() response) {
      this.productoService.allProductos().then(productoslist=>{
        response.status(HttpStatus.OK).json(productoslist);
      }).catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({mensaje:'Ocurrio un error'});
      });
    }

    /**
     * 
     * @param actualizaProductoDto 
     * @description Servicio para actualizar Producto
     */

    @Put(':id')
    actualizarProductos(@Body() actualizaProductoDto: CrearProductoDto, @Res() response, @Param('id') idMensaje) {
      this.productoService.actualizarProducto(idMensaje,actualizaProductoDto)
          .then(producto =>{
            response.status(HttpStatus.OK).json(producto);
          })
          .catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'Ocurrio un error Actualizando'});
          });
    }


    /**
     * @description Servicio para Eliminar Productos
     */
    @Delete(':id')
    eliminarProducto( @Res() response, @Param('id') idMensaje) {
      this.productoService.eliminarProducto(idMensaje)
          .then(respuesta => {
            response.status(HttpStatus.OK).json(respuesta);
          })
          .catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'Ocurrio un error Eliminando'});
          });
    }

    //ojo con esto

    @Get(':id')
    allProducto( @Res() response, @Param('id') idMensaje) {
      this.productoService.unProducto(idMensaje)
          .then(respuesta => {
            response.status(HttpStatus.OK).json(respuesta);
          })
          .catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'Ocurrio un error Eliminando'});
          });
    }
    
}
