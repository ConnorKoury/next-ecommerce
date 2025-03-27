import { getORM } from '@/database/orm'; 
import Product from '@/database/module/product.entity';
import ProductGrid from '@/components/productGrid';
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
        <ProductGrid/>
      </div>
    </div>
  );
}
