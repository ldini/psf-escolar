import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Estudiante } from "./estudiante.entity";
import { Clase } from "src/clases/entities/clase.entity";

@Entity('clase_estudiante')
export class EstudianteClase{
    @PrimaryColumn()
    estudianteId:number;

    @PrimaryColumn()
    claseId:number;

    constructor(estudianteId:number,claseId:number){
        this.estudianteId = estudianteId;
        this.claseId = claseId;
    }

    @ManyToOne(()=>Estudiante,estudiante=>estudiante.estudianteClases)
    @JoinColumn()
    estudiante:Estudiante;

    @ManyToOne(()=>Clase,clase=>clase.estudianteClases)
    @JoinColumn()
    clase:Clase;

}