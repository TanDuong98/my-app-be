import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorite } from './entities/favorite.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite)
    private repo: Repository<Favorite>,
  ) {}
  create(createFavoriteDto: CreateFavoriteDto) {
    return this.repo.save(createFavoriteDto);
  }

  findAll(userNo: string) {
    return this.repo.find({ where: { userNo } });
  }

  remove(rowpointer: string) {
    return this.repo.delete(rowpointer);
  }
}
