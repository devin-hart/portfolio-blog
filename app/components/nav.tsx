import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work/projects',
  },
  '/other': {
    name: 'other',
  },
}


export function Navbar() {  
  return (
    <aside className=" mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-4 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all flex align-middle relative"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
