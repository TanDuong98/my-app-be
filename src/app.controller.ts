import { Controller, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './decorator/public';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Public()
  @Post('auth/login')
  async login(@Request() req: any) {
    console.log(req.body);
    return this.authService.login(req.body);
  }
}
