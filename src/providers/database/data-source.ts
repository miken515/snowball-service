import 'dotenv/config';
import { DataSource } from 'typeorm';
import { env } from '../../config/env';
import { User } from './entities/users.entity';

export default new DataSource({
  type: 'postgres',
  host: env.db.host,
  port: env.db.port,
  username: env.db.user,
  password: env.db.pass,
  database: env.db.name,
  ssl: env.db.ssl ? { rejectUnauthorized: false } : false,
  entities: [User],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  logging: env.typeorm.logging,
  synchronize: false,
});