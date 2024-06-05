import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get()
  findByUser(no: string) {
    return this.favoriteService.findAll(no);
  }

  @Delete(':rowpointer')
  remove(@Param('rowpointer') rowpointer: string) {
    return this.favoriteService.remove(rowpointer);
  }
}
