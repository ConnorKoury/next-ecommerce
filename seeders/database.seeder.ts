import { Factory } from '@mikro-orm/seeder';
import { faker } from '@faker-js/faker';
import { Product } from '../database/module/product.entity';

export class ProductFactory extends Factory<Product> {
  model = Product;

  definition(): Partial<Product> {
    return {
      name: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: faker.number.float(),
    };
  }
}