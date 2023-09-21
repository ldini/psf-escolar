import { Injectable } from '@nestjs/common';
import { EstudianteDto } from './dto/create-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';
import { Clase } from 'src/clases/entities/clase.entity';

@Injectable()
export class EstudianteService {

  constructor(@InjectRepository(Estudiante)
              private estudianteRepository:Repository<Estudiante>,
              @InjectRepository(Clase)
              private claseRepository:Repository<Clase>)
  {}


  async create(estudianteDto: EstudianteDto) {
    //const fecha = new Date();
    const estudiante : Estudiante = await this.estudianteRepository.save(new Estudiante(estudianteDto.nombre,estudianteDto.apellido,estudianteDto.fecha_nacimiento))
    if(estudiante)
      return `se creo estudiante ${estudiante.nombre}`;
    else
      return 'no se creo estudiante';
  }

  async createConRelacion(estudianteDto:EstudianteDto):Promise<boolean>{
    const clase:Clase = await this.claseRepository.findOne({where:{id:1}})
    let estudiante:Estudiante = new Estudiante(estudianteDto.nombre,estudianteDto.apellido,estudianteDto.fecha_nacimiento);
    if(clase)
      estudiante.clases = [clase];
    await this.estudianteRepository.save(estudiante);
    if(estudiante)
      return true;
    return false;
  }

  findAll() {
    return `This action returns all estudiante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, estudianteDto: EstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
