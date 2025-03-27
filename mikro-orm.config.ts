import 'reflect-metadata';
import { Options } from '@mikro-orm/core';
import Product from './database/module/product.entity';
import Cart from './database/module/cart.entity';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';

const config: Options = {
  driver: PostgreSqlDriver,
  
  host: 'localhost',
  port: 5432,
  dbName: "ecom-db",
  user: 'postgres',
  password: 'randompassword',

  entities: [Product, Cart],

  migrations: {
    path: './migrations',
  },
  extensions: [SeedManager],
};

export default config;