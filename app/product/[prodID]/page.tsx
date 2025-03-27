import { getORM } from "@/database/orm";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import Product from "@/database/module/product.entity";
import ProductGrid from "@/components/productGrid";
import AddToCartButton from "@/components/addToCartButton";

// Receive the id from dynamic url
interface PageProps {
  params: Promise<{
    prodID: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  // Find selected product to display
  const prodID = parseInt((await params).prodID, 10);

  const orm = await getORM();
  const em = orm.em.fork();
  const featured = await em.findOne(Product, {id:prodID});

  // The rest of the products
  const allProducts = await em.find(Product, {});

  // If no product was found
  if (!featured) {
    return(
      <div>
        <div>Product not found</div>
        <ProductGrid />
      </div>
    );
  }

  // Display large product on top and similar items on bottom
  return (
    <div className="grid gap-10">
      < Card>
        <div className="grid grid-cols-2">
            <Image alt={featured.description} src={featured.imageUrl} width={600} />
            <div className="object-left-bottom">
              <h2 className="text-2xl font-bold">{featured.name}</h2>
              <p>{featured.description}</p>
              <p className="font-bold">${featured.price}</p>
              <AddToCartButton productID={featured.id}/>
            </div>
        </div>
      </Card>
      <div>
        <h1 className="text-4xl font-semibold">Similar Products</h1>
        <ProductGrid />
      </div>
    </div>
  );
}
