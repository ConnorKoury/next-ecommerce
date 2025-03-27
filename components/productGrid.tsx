import { getORM } from '@/database/orm'; 
import Product from '@/database/module/product.entity';
import ProductCard from '@/components/productCard';

export default async function ProductGrid() {
  const orm = await getORM();
  const em = orm.em.fork();
  const products = await em.find(Product, {});

  return (
    <div>
        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} id={p.id} description={p.description} imgUrl={p.imageUrl} price={p.price} name={p.name}/>
          ))}
        </div>
    </div>
  );
}
