import { getORM } from '@/database/orm'; 
import { Product } from '@/database/module/product.entity';
import ProductCard from '@/components/productCard';

export default async function Page() {
  const orm = await getORM();
  const em = orm.em.fork();
  const products = await em.find(Product, {});
  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} description={p.description} imgUrl={p.imageUrl}/>
      ))}
    </div>
  );
}
