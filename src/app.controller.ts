import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger'; 
import { get } from 'http';

@Controller()
@ApiTags()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  HelloWord() {
    return "Hello guys"
  }
  
}
