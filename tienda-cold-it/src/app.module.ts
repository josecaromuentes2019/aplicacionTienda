import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MisproductosController } from './misproductos/misproductos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productos } from './misproductos/entities/productos.entity';
import { MisproductosService } from './misproductos/misproductos.service';


@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'coldinttienda',
      entities: [Productos],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Productos])
  ],
  controllers: [AppController, MisproductosController],
  providers: [AppService, MisproductosService],
})
export class AppModule {}
