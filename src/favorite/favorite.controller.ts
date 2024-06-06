import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Favorite')
@Controller()
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  create(@Body() dto: CreateFavoriteDto) {
    return this.favoriteService.create(dto);
  }

  @Post('saveAll')
  saveAll(@Body() lstDto: CreateFavoriteDto[]) {
    console.log(lstDto);
    return this.favoriteService.saveAll(lstDto);
  }

  @Get('/:userNo')
  findByUser(@Param('userNo') userNo: string) {
    return this.favoriteService.findAll(userNo);
  }

  @Post('remove')
  delete(@Body() dto: { userNo: string; files: string }) {
    return this.favoriteService.delete(dto);
  }
}
