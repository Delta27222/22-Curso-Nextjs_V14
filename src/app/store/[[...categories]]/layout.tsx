
const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <main className="flex flex-col justify-center items-center">
      <nav className="text-red-300">Navegacion de las categorías</nav>
      {children}
    </main>
  )
}
export default layout;


