import { Entity, FloatType, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Product {

   @PrimaryKey()
   id!: number;

   @Property()
   name!: string;

   @Property({ type: 'text' })
   description = '';

   @Property()
   price!: FloatType;

   @Property()
   imageUrl!: string;

}