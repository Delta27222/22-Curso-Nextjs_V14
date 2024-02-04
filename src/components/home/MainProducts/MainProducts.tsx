import Image from "next/image";

const getProducts = async () => {
  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}admin/api/2023-10/products.json`, {
    headers: new Headers( {
      "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || ''
    })
  });
  const data = await response.json();
  return data;
}

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
  console.log("🚀 ~ MainProducts ~ products:", products)

  return (
    <section className="flex flex-wrap justify-center items-center p-24">
      <h1 className="font-bold text-3xl">MainProducts</h1>
      {products && products.products.map((product: Product) => {
        return (
          <div key={product.id} className="flex flex-col justify-center items-center p-24">
            <h1 className="font-bold text-3xl">{product.title}</h1>
            <span>{product.images[0].src}</span>
            <Image
              src={product.images[0].src}
              alt={product.title}
              width={200}
              height={200}
            />
          </div>
        )
      })}
    </section>
  )
}
