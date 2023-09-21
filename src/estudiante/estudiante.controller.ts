import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteDto } from './dto/create-estudiante.dto';


@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  async create(@Body() estudianteDto: EstudianteDto) {
    return await this.estudianteService.create(estudianteDto);
  }

  @Post('con_relacion')
  async createConRelacion(@Body() estudianteDto:EstudianteDto):Promise<boolean>{
    return await this.estudianteService.createConRelacion(estudianteDto);
  }

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudianteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() estudianteDto: EstudianteDto) {
    return this.estudianteService.update(+id, estudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudianteService.remove(+id);
  }
}
