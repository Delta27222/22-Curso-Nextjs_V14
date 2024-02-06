import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero/Hero";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Hero />
      <Description />
      {children}
    </section>
  )
}