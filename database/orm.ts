import { MikroORM } from '@mikro-orm/core';
import config from '@/mikro-orm.config';

let ormPromise: Promise<MikroORM>;

export async function getORM() {
  if (!ormPromise) {
    ormPromise = MikroORM.init(config);
  }
  return ormPromise;
}
