import { Escuela } from "src/escuela/entities/escuela.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'clase'})
export class Clase {

    //atributos
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre: string;

    @ManyToOne(()=>Profesor,profesor=>profesor.clases)
    @JoinColumn({name:"fk_id_profesor"})
    profesor:Profesor;

    @ManyToOne(()=>Escuela,escuela=>escuela.clases)
    @JoinColumn({name:"fk_id_escuela"})
    escuela:Escuela;

    @ManyToMany(()=>Estudiante,estudiantes=>estudiantes.clases)
    @JoinTable({name:'clase_estudiante'})
    estudiantes:Estudiante[];

    //constructor
    constructor(nombre:string){
        this.nombre=nombre;
    }

    //getters and setters
    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
}
