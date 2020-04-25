import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Productos } from './entities/productos.entity';
import { Repository } from 'typeorm';
import { CrearProductoDto } from './dto/crear-producto-dto';

@Injectable()
export class MisproductosService {

  /**
   * 
   * @param productoRepository 
   * Se crea un repositorio para manupular los dato 
   */
    constructor(
        @InjectRepository(Productos)
        private productoRepository: Repository<Productos>,
      ) {}

      async allProductos(): Promise<Productos[]> {
        return await this.productoRepository.find();
      }


      async createProductos(nuevoProducto:CrearProductoDto):  Promise<Productos>{
        
        const unProducto = new Productos()
         unProducto.id = nuevoProducto.id;
         unProducto.valor = nuevoProducto.valor;
         unProducto.nombreProducto = nuevoProducto.nombreProducto;

         return await this.productoRepository.save(unProducto);
      }

      async actualizarProducto(idProducto: number, productoActualizar: CrearProductoDto):  Promise<Productos>{
        const productoUptate = await this.productoRepository.findOne(idProducto);
        productoUptate.nombreProducto = productoActualizar.nombreProducto; 
        productoUptate.valor = productoActualizar.valor;
        
        return await
         this.productoRepository.save(productoUptate);
      }

      async eliminarProducto(idProducto: number):  Promise<any>{
        return await this.productoRepository.delete(idProducto);
      }

      //ojo aqui
   

      async unProducto(idProducto: number):  Promise<any>{
        return await this.productoRepository.findOne(idProducto);
      }
}
