import { getProducts } from "app/services/shopify";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  status: string;
  images: Array<{
    src: string;
  }>
}

export const MainProducts = async () => {
  const products = await getProducts();

  return (
    <section className="w-full space-y-6">
      <h3 className="text-center text-5xl mb-10">🌟 New products release!</h3>
        <div className="grid grid-cols-2 grid-rows-3 w-full">
          {products.map((product: Product) => {
            const imageSrc = product.images[0].src;
            return (
              <article key={product.id} className="relative z-10 min-h-96">
                <p className="absolute top-0 right-6 z-10 text-2xl font-bold max-w-96 text-left">{product.title}</p>
                <Image
                  className="h-96  opacity-40 object-cover"
                  src={imageSrc}
                  alt={product.title}
                  fill
                  loading="eager"
                  />
              </article>
            )
          })}
        </div>
    </section>
  )
}
