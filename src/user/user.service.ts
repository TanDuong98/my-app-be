import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}
  register(createUserDto: CreateUserDto) {
    return this.repo.save(createUserDto);
  }

  findOne(userNo: string) {
    return this.repo.find({where: {userNo}})
  }
}
