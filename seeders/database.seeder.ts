import { Factory } from '@mikro-orm/seeder';
import { faker } from '@faker-js/faker';
import Product from '@/database/module/product.entity';

export class ProductFactory extends Factory<Product> {
  model = Product;

  // Seeds the product table with random data using faker

  definition(): Partial<Product> {
    return {
      name: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: faker.number.float(),
    };
  }
}