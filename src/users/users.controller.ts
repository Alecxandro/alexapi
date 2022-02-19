import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':userName')
  findOne(@Param('userName') userName: string) {
    return this.usersService.findOne(userName);
  }

  @Patch(':userName')
  update(
    @Param('userName') userName: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(userName, updateUserDto);
  }

  @Delete(':userName')
  remove(@Param('userName') userName: string) {
    return this.usersService.remove(userName);
  }
}
