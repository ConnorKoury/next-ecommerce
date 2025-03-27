import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

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

  entities: ['./**/*.entity.js'],
  entitiesTs: ['./**/*.entity.ts'],
  // we will use the ts-morph reflection, an alternative to the default reflect-metadata provider
  // check the documentation for their differences: https://mikro-orm.io/docs/metadata-providers
  metadataProvider: TsMorphMetadataProvider,
  // enable debug mode to log SQL queries and discovery information
  debug: true,
};

export default config;