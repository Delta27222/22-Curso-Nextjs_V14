import { MainProducts } from "app/components/home/MainProducts/MainProducts";
import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero/Hero";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
export default Home;
