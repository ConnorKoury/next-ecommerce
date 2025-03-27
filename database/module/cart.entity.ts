import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import Product from './product.entity';

@Entity()
export default class Cart {

   @PrimaryKey({ type: 'number' })
   id!: number;

   @ManyToOne({ type: 'Product' })
   product!: Product;

   @Property({ type: 'number' })
   quantity!: number;

}