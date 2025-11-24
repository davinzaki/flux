"use client";

import { useState } from "react";
import { HeartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import type { Product } from "@/types/product.entity";
import { cn } from "@/lib/utils";

const CardProduct = ({ name, description, images, price, stock }: Product) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-xl shadow-md transition hover:shadow-lg">
      {/* Product Image */}
      <div className="relative h-48 w-full bg-muted">
        <img
          src={images?.[0]}
          alt={name}
          className="h-full w-full object-contain p-3"
        />

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md"
        >
          <HeartIcon
            className={cn(
              "size-5",
              liked ? "fill-red-500 stroke-red-500" : "stroke-gray-700"
            )}
          />
        </button>

        {/* Stock Badge */}
        <Badge
          variant={stock > 0 ? "default" : "destructive"}
          className="absolute left-3 top-3"
        >
          {stock > 0 ? `Stock: ${stock}` : "Out of stock"}
        </Badge>
      </div>

      {/* Content */}
      <CardHeader>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        {/* Price */}
        <div className="text-lg font-semibold">
          Rp {price.toLocaleString("id-ID")}
        </div>

        {/* Add to cart */}
        <Button disabled={stock === 0}>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
