import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './providers/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule],
})

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}