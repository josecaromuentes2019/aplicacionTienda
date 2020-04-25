import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Se mapea la tabla producto en la tabla Productos
 */
@Entity()
export class Productos {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    valor: number;

    @Column()
    nombreProducto: string;
}
