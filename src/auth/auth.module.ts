import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret:
        '-----BEGIN PUBLIC KEY-----MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5Weqak2gFUwnP7Ml/RTvG5EnX0r6UtaUEKy14hmxGjO2VvF8rPU3NYNVoflV2YMF/iLQWImpMKyvPNsEq/GBrBYy0xX7u5xOyMoIFBLExk6JcWCwsij9zxdqG4UnyoCnTQVG/djjfEqDOV5IzaaMGpGcyIEriyyttgdYEj+rWdqsbQCl0vYc4GDHiCqkWgOzYuZWDjKam2vTVpge69v+kWwnAyImJp2KAIgJ8+I1Py5aWBJ6FNj8RB4SVf8/V832H/NTCfXLI88PlriDcLYdVS0PHbnT0SgjtGkrDI2XDAg5VfQbfPKlSgLwtpZfC5oqgxBEaYtdU8eEkpShsoqPPFvBCiV1htBHWsJjCwWPxAWNcrO0gdkH7ImnmYgAiwufVmmp2MZpLhtSmfUINsvcUI8F/cpcRtp74Cpo8bDVA10nKa3RDvaHtM7HHYVRt65+4DvPdSVqkZ8XjgMPWQvttJCShJ1cj9ow+RZKtsrJNeIu2n9h4CfzcR9RpJ6E27DZ7MeeYEwHH9RwVrpzHFfK6qbhINudl7DFoTV/F8UdyqczLcHqhIzFPijz5iXcIeUjH6KfLMd2k9XxUXdtk0VG9by/BPh6NySXP+aFrTBkwhh72SjvLk9EYVEuWQKcsfsyIA/aP2Vsf8RrtTgaLHcapcVabmh0a5YGk7T6cci/2kkCAwEAAQ==-----END PUBLIC KEY-----',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
