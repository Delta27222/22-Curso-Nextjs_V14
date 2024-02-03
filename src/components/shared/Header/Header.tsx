import Link from "next/link"

export const Header = () => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Stock",
      url: "/store",
    },
  ]
  return (
    <header>
      <nav>
        <ul className="flex flex-row flex-nowrap list-none gap-10 my-0 mx-auto p-8 justify-center">
          {links.map((link) => {
            return (
              <li key={link.url}>
                <Link className="list-none text-xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500" href={link.url}>
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}