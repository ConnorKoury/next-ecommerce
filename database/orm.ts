import { MikroORM } from '@mikro-orm/core';
import config from '@/mikro-orm.config';

let ormPromise: Promise<MikroORM>;

// This might need to be updated so we don't keep creating initations

export async function getORM() {
  if (!ormPromise) {
    ormPromise = MikroORM.init(config);
  }
  return ormPromise;
}
