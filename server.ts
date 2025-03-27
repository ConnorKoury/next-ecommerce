import { MikroORM } from '@mikro-orm/postgresql'; // or any other driver package

// initialize the ORM, loading the config file dynamically
const orm = await MikroORM.init();
console.log(orm.em); // access EntityManager via `em` property
console.log(orm.schema); // access SchemaGeneartor via `schema` property