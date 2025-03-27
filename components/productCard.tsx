import "@/styles/globals.css";
import {Image} from "@heroui/image";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Button } from "@heroui/button";
import CartButtons from "./cartButtons";

interface ProductProps {
    imgUrl: string;
    description: string;
}

export default function ProductCard({imgUrl, description}: ProductProps){
    return(
        <div>
            <Card>
                <Image
                    alt={description}
                    src={imgUrl}
                    width={300}
                />
                <p>{description}</p>
                <CardFooter>
                    <CartButtons/>
                </CardFooter>
            </Card>
        </div>
    );
}