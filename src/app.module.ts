import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavoriteModule } from './favorite/favorite.module';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '172.16.10.18',
      port: 14332,
      username: '',
      password: '',
      database: 'HRM',
      entities: [],
      synchronize: true,
    }),
    FavoriteModule,
    RouterModule.register([
      {
        path: 'api',

        children: [
          {
            path: 'favorite',

            module: FavoriteModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
