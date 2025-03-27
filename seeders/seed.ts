import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { ProductFactory } from './database.seeder';

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    new ProductFactory(em).make(10);
  }
}