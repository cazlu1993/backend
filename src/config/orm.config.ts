import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import * as fs from 'fs';
import { CreateTask1654578859820 } from '../migrations/1654578859820-CreateTask';
import { Task } from '../todo/task.entity';
import * as dotenv from 'dotenv';

const data: any = fs.existsSync('.env')
    ? dotenv.parse(fs.readFileSync('.env'))
    : process.env;
const mainOptions: any = {
  type: 'mysql',
  host: data.DATABASE_HOST,
  port: +data.DATABASE_PORT,
  username: data.DATABASE_USER,
  password: data.DATABASE_PASSWORD,
  database: data.DATABASE_DBNAME,
  synchronize: false,
  migrations: [CreateTask1654578859820],
  entities: [Task],
};

const testOptions: any  = {
  type: 'sqlite',
  database: ':memory:',
  synchronize: false,
  migrationsRun: true,
  entities: [Task],
  migrations: [CreateTask1654578859820]
};

let config;

if(process.env.NODE_ENV === 'seed' || process.env.NODE_ENV === `migration`)
  config = new DataSource({ ...testOptions, ...mainOptions });
else
  config = mainOptions

export default config;
