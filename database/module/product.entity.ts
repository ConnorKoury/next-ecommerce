import { Entity, Opt, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export default class Product {

   @PrimaryKey({ type: 'number' })
   id!: number;

   @Property({ type: 'string' })
   name!: string;

   @Property({ type: 'text' })
   description = 'This is the default description.';

   @Property({ type: 'float' })
   price!: number;

   @Property({ type: 'string' })
   imageUrl: string & Opt = "https://fastly.picsum.photos/id/1041/200/200.jpg?hmac=1CDPtzGhHDqltV1i3b5YV4hY9UYY_6ubvXbxJO9QchQ"; // Placeholder Image

}