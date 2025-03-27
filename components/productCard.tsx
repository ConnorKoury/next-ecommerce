import "@/styles/globals.css";
import {Image} from "@heroui/image";
import {Card, CardBody, CardFooter} from "@heroui/card";
import AddToCartButton from "./addToCartButton";
import Link from "next/link";

interface ProductProps {
    imgUrl: string;
    description: string;
    price: number;
    id: number;
    name: string
}

export default function ProductCard({imgUrl, description, price, id, name}: ProductProps){
    return(
        <div>
                <Card>
                    <Link href={`/product/${id}`}>
                        <CardBody>
                        {/* Product image is a placeholder */}
                        <Image
                            alt={description}
                            src={imgUrl}
                            width={300}
                        />
                        <p className="font-bold">{name}</p>
                        <p>{description}</p>

                        {/* Price and add to cart functionality */}
                        </CardBody>
                    </Link>
                    <CardFooter>
                        <div className="grid grid-cols-3 grid-rows-1 gap-4">
                            <p className="font-bold">${price}</p>
                            <AddToCartButton productID={id}/>
                        </div>
                    </CardFooter>
                </Card>
        </div>
    );
}