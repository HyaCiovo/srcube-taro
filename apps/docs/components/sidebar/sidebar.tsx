import { docs } from '#velite'
import { groups } from '@/config/sidebar'
import { nanoid } from 'nanoid'
import Link from 'next/link'

enum Status {
  waiting = 'Building',
  done = 'Done',
  updated = 'Updated',
  deprecated = 'Deprecated',
}

function getSidebarData() {
  const tree = groups.map((g) => {
    const routes = docs
      .filter(page => page.meta.group === g.key)
      .sort((a, b) => (a.meta.sort ?? 0) - (b.meta.sort ?? 0))
      .map(p => ({
        key: nanoid(),
        title: p.title,
        href: p.slug.join('/'),
        status: p.meta.status,
      }))

    return {
      key: nanoid(),
      title: g.title,
      routes,
    }
  })

  return tree
}

function Sidebar() {
  const sidebarData = getSidebarData()

  return (
    <nav className="fixed flex flex-col gap-4">
      {sidebarData.map(g => (
        <div key={g.key}>
          <div className="flex items-center gap-1 mb-2">
            <span className="font-medium">{g.title}</span>
          </div>
          <ul className="flex flex-col gap-2 pl-4">
            {g.routes.map(r => (
              <li
                key={r.key}
                className="flex items-center before:content-[''] before:size-1 before:rounded-full before:bg-gray-500/20 before:mr-2.5"
              >
                <Link
                  href={`/docs/${r.href}`}
                  className="flex items-center gap-4 w-full font-light hover:text-gray-900 dark:hover:text-gray-100"
                >
                  <span className="opacity-60 text-sm">{r.title}</span>
                  {r.status && (
                    <span className="text-xs text-blue-500 rounded-full bg-blue-500/10 px-2 py-1">
                      {Status[r.status]}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default Sidebar
