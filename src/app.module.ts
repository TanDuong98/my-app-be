import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavoriteModule } from './favorite/favorite.module';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DB,
      synchronize: true,
      options: { encrypt: false },
      autoLoadEntities: true,
      requestTimeout: 600000,
    }),
    FavoriteModule,
    RouterModule.register([
      {
        path: 'api',

        children: [
          {
            path: 'auth',

            module: AuthModule,
          },
          {
            path: 'favorite',

            module: FavoriteModule,
          },
          {
            path: 'user',

            module: UserModule,
          },
        ],
      },
    ]),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
