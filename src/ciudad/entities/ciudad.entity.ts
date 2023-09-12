import { Escuela } from "src/escuela/entities/escuela.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"ciudad"})
export class Ciudad{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string; 

    @OneToMany(()=>Escuela,escuela=>escuela.ciudad)
    public escuelas:Escuela[];

    constructor(nombre:string){
        this.nombre = nombre
    }
    
    public getId():number{
        return this.id;
    }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre:string){
        this.nombre = nombre;
    }


}