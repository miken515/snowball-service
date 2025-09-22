import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../providers/database/entities/users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}

  create(name: string, email: string) {
    const u = this.repo.create({ name, email });
    return this.repo.save(u);
  }

  findAll() {
    return this.repo.find();
  }
}

