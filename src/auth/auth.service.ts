import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user[0] && user[0].password === password) {
      delete user[0].password
      return user[0];
    }
    return null;
  }

  async login(user: User) {
    const t = await this.validateUser(user.userNo, user.password);
    console.log(user);
    console.log(t);
    if (t) {
      const payload = { userNo: t.username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
