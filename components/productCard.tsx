import "@/styles/globals.css";
import {Image} from "@heroui/image";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Button } from "@heroui/button";
import AddToCartButton from "./addToCartButton";

interface ProductProps {
    imgUrl: string;
    description: string;
    price: number;
    id: number
}

export default function ProductCard({imgUrl, description, price, id}: ProductProps){
    return(
        <div>
            <Card>
                {/* Product image is a placeholder */}
                <Image
                    alt={description}
                    src={imgUrl}
                    width={300}
                />
                <p>{description}</p>

                {/* Price and add to cart functionality */}
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