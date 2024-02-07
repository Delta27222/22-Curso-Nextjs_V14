import { ProductWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify";

interface CategoriesProps {
  params: {
    categories: string[];
  },
  searchParams: {
    param?: string
  }
}
export default async function Category(props: CategoriesProps) {
  const products = await getProducts();
  const { categories } = props.params
  return (
    <ProductWrapper products={products}/>
  )
}

