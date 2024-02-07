import Image from "next/image"
import Link from "next/link"
import { ProductType } from "../../../../types";

interface ProductCardInterface {
  product: ProductType;
}
export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link href={`articulo/${product.handle}?id=${product.id}`} className="text-white cursor-pointer">
      <article className="flex flex-col relative">
        <Image
          src={product.image}
          alt={product.title}
          quality={80}
          width={320}
          height={320}
          loading="eager"
        />
        <div className="p-3 pt-0 rounded-md">
          <h3>{product.title}</h3>
        </div>
        <span className="w-fit inline-block bg-red-600 text-white p-1 absolute top-[-0.5rem] -right-4 rounded-md rotate-6">$ {product.variants[0].price}</span>
      </article>
    </Link>
  )
}