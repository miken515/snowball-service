import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly svc: UsersService) {}

  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.svc.create(body.name, body.email);
  }

  @Get()
  findAll() {
    return this.svc.findAll();
  }
}
