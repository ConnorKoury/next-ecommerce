import { NextApiRequest, NextApiResponse } from 'next';
import { MikroORM } from '@mikro-orm/core';
import config from '../mikro-orm.config';
import { Product } from '../database/module/product.entity';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Initialize ORM and get an EntityManager
  const orm = await MikroORM.init(config);
  // fork a new EntityManager for this request
  const em = orm.em.fork();

  // Fetch all products
  const prods = await em.find(Product, {});
  res.status(200).json(prods);
}
