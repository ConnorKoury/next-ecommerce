import { Entity, FloatType, Opt, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Product {

   @PrimaryKey()
   id!: number;

   @Property()
   name!: string;

   @Property({ type: 'text' })
   description = 'This is the default description.';

   @Property({ type: 'float' })
   price!: number;

   @Property()
   imageUrl: string & Opt = "https://fastly.picsum.photos/id/1041/200/200.jpg?hmac=1CDPtzGhHDqltV1i3b5YV4hY9UYY_6ubvXbxJO9QchQ"; // Placeholder Image

}