import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth-1')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.AuthService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.AuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.AuthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.AuthService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AuthService.remove(+id);
  }
}
