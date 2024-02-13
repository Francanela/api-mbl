import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationsDto } from './dto/create-applications.dto';
import { ApiTags } from '@nestjs/swagger';
import { CustomInterceptors } from 'src/custom.interceptors';
@ApiTags('applications')
@Controller('applications')
@UseInterceptors(CustomInterceptors)
export class ApplicationsController {
    constructor(private readonly applicationsService: ApplicationsService) {}
    @Post()
    create(@Body() createApplicationsDto: CreateApplicationsDto) {
        console.log(createApplicationsDto);
      return this.applicationsService.create(createApplicationsDto);
    }

}