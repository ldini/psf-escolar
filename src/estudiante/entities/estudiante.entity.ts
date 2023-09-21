import { Clase } from "src/clases/entities/clase.entity";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'estudiantes'})
export class Estudiante {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    @Column()
    fecha_nacimiento:Date;

    @ManyToMany(()=>Clase,clases=>clases.estudiantes)
    clases:Clase[];


    constructor(nombre:string,apellido:string,fecha:Date){
        this.nombre = nombre;
        this.apellido=apellido;
        this.fecha_nacimiento = fecha;
    }



}
