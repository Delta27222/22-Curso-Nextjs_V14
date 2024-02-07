import { ProductType } from "../../../../types"
import { ProductCard } from "../ProductCard"

interface ProductsWrapperProps {
  products: ProductType[]
}

export const ProductWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className="flex flex-wrap gap-x-12 gap-y-8 justify-center content-center mt-12 mx-12">
      {products.map((product) => {
        return (
          <ProductCard key={product.id} product={product} />
        )
      })}
    </div>
  )
}