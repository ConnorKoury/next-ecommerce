import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import { Product } from './database/module/product.entity';

const config: Options = {
  driver: PostgreSqlDriver,
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'randompassword',
  dbName: 'ecom-db',
  migrations: {
    path: './migrations',
  },

  entities: [Product],
  // we will use the ts-morph reflection, an alternative to the default reflect-metadata provider
  // check the documentation for their differences: https://mikro-orm.io/docs/metadata-providers
  metadataProvider: TsMorphMetadataProvider,
  // enable debug mode to log SQL queries and discovery information
  debug: true,
  extensions: [SeedManager],
};

export default config;