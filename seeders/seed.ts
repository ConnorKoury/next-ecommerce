import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { ProductFactory } from './database.seeder';

export class DatabaseSeeder extends Seeder {
  
  // Creates 10 product items using the factory
  async run(em: EntityManager): Promise<void> {
    new ProductFactory(em).make(10);
  }
}