import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { Ciudad } from './entities/ciudad.entity';
import { CiudadDTO } from './dto/ciudad.dto';

@Controller('ciudad')
export class CiudadController {

    constructor(private readonly ciudadService: CiudadService){}

    @Get('raw')
    async getAllRaw():Promise<Ciudad[]>{
        return await this.ciudadService.findAllRaw();
    }

    @Get('orm')
    async getAllOrm():Promise<Ciudad[]>{
        return await this.ciudadService.findAllOrm();
    }

    @Get(':id')
    async getId(@Param('id')id:number) : Promise<Ciudad>{
        return await this.ciudadService.findById(id);
    }

    @Post('crear')
    async crearCiudad(@Body() ciudadDTO:CiudadDTO):Promise<boolean>{
        return this.ciudadService.create(ciudadDTO);
    }

    @Put('actualizar/:id')
    async actualizarCiudadId(@Body() ciudadDTO, @Param('id') id: number){
        return this.ciudadService.update(ciudadDTO)
    }

}
