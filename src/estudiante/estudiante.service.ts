import { Injectable } from '@nestjs/common';
import { EstudianteDto } from './dto/create-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';
import { Clase } from 'src/clases/entities/clase.entity';
import { EstudianteClase } from './entities/estudiante_clase.entity';

@Injectable()
export class EstudianteService {

  constructor(@InjectRepository(Estudiante)
              private estudianteRepository:Repository<Estudiante>,
              @InjectRepository(Clase)
              private claseRepository:Repository<Clase>,
              @InjectRepository(EstudianteClase)
              private estudianteClaseRepository:Repository<EstudianteClase>)
  {}


  async create(estudianteDto: EstudianteDto) {
    //const fecha = new Date();
    const estudiante : Estudiante = await this.estudianteRepository.save(new Estudiante(estudianteDto.nombre,estudianteDto.apellido,estudianteDto.fecha_nacimiento))
    if(estudiante)
      return `se creo estudiante ${estudiante.nombre}`;
    else
      return 'no se creo estudiante';
  }

  async addClase(body):Promise<any>{
    const {claseId,estudianteId} = body;
    const estudiante = await this.estudianteRepository.findOne({where:{id:estudianteId}})
    if(!estudiante)
      return `error - no se encontre el estudiante con id ${estudianteId}`;
    const clase = await this.claseRepository.findOne({where:{id:claseId}})
    if(!clase)
      return 'error - no se encontro esa clase';
    const clase_estudiante = await this.estudianteClaseRepository.findOne({where:{claseId:claseId,estudianteId:estudianteId}})
    if(clase_estudiante)
      return 'error - el estudiante ya tiene asignada esa clase';
    return await this.estudianteClaseRepository.save(new EstudianteClase(estudianteId,claseId));
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
