import { MikroORM } from '@mikro-orm/postgresql';
import config from './mikro-orm.config';

(async () => {
  try {
    const orm = await MikroORM.init(config);
    // Update the schema to ensure all tables exist
    await orm.getSchemaGenerator().updateSchema();

    const em = orm.em.fork();

    console.log('Database schema is updated');
  } catch (err) {
    console.error('Error during ORM initialization:', err);
  }
})();