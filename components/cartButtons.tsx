import "@/styles/globals.css";
import {Image} from "@heroui/image";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Button } from "@heroui/button";

export default function CartButtons(){
    return(
        <div>
            <Button
                className="font-bold bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
                >
                Add to Cart
            </Button>
        </div>
    );
}