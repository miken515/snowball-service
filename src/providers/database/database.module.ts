import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from '../../config/env';
import { User } from './entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: env.db.host,
        port: env.db.port,
        username: env.db.user,
        password: env.db.pass,
        database: env.db.name,
        ssl: env.db.ssl ? { rejectUnauthorized: false } : false,
        entities: [User],               // add more entities here
        logging: env.typeorm.logging,
        synchronize: env.typeorm.synchronize, // false in prod
        migrations: [__dirname + '/migrations/*.{ts,js}'],
      }),
    }),
  ],
})
export class DatabaseModule {}
