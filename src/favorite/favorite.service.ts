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
  async create(dto: CreateFavoriteDto) {
    return this.repo.save(dto);
  }

  async saveAll(lstDto: CreateFavoriteDto[]) {
    for (let i = 0; i < lstDto.length; i++) {
      const a = await this.repo.find({
        where: {
          userNo: lstDto[i].userNo,
          files: lstDto[i].files,
        },
      });
      if (!a.length) this.repo.save(lstDto[i]);
    }
    return { result: 'OK' };
  }

  findAll(userNo: string) {
    return this.repo.find({ where: { userNo } });
  }
  async delete(dto: { userNo: string; files: string }) {
    const a = await this.repo.find({
      where: {
        userNo: dto.userNo,
        files: dto.files,
      },
    });
    return this.repo.delete(a[0].id);
  }
}
