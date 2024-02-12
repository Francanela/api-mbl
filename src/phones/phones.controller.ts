import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhonesService } from './phones.service';

@Controller('/phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.phonesService.findOne(id);
  }
}
