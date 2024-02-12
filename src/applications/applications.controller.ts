import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationsDto } from './dto/create-applications.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('applications')
@Controller('applications')
export class ApplicationsController {
    constructor(private readonly applicationsService: ApplicationsService) {}
    @Post()
    create(@Body() createApplicationsDto: CreateApplicationsDto) {
        console.log(createApplicationsDto);
      return this.applicationsService.create(createApplicationsDto);
    }

}
