import { Entity, FloatType, IntegerType, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Product } from './product.entity';

@Entity()
export class Cart {

   @PrimaryKey()
   id!: number;

   @ManyToOne()
   product!: Product;

   @Property()
   quantity!: number;

}