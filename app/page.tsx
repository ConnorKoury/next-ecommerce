import { getORM } from '@/database/orm'; 
import { Product } from '@/database/module/product.entity';
import ProductCard from '@/components/productCard';
import { Image } from '@heroui/image';

export default async function Page() {
  const orm = await getORM();
  const em = orm.em.fork();
  const products = await em.find(Product, {});

  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {/* Main Product Display */}
        <Image
          width={3000}
          height={300}
          src={products[0].imageUrl}
        />

        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} description={p.description} imgUrl={p.imageUrl} price={p.price}/>
          ))}
        </div>
      </div>
    </div>
  );
}
