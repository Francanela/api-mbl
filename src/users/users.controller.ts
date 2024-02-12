import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/users/dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(){
      return this.usersService.findAll();
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
      console.log(createUserDto);
      return this.usersService.create(createUserDto);
    }
  }

