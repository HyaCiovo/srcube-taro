import { docs } from '#velite'
import { MDXContent } from '@/components/mdx-content'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string[] }>
}

const getPageBySlug = (slug: string[]) =>
  docs.find((page) => JSON.stringify(page.slug) === JSON.stringify(slug))

const getSidebarData = () => {
  const groups = [...new Set(docs.map((page) => page.meta.group))]

  const tree = groups.map((group) => {
    const routes = docs
      .filter((page) => page.meta.group === group)
      .sort((a, b) => a.meta.sort - b.meta.sort)
      .map((p) => ({
        key: nanoid(),
        title: p.title,
        href: p.slug.join('/'),
      }))

    return {
      key: nanoid(),
      title: group,
      routes,
    }
  })

  return tree
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params

  const sidebarData = getSidebarData()

  const doc = getPageBySlug(slug)

  if (!doc) return notFound()

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 p-8">
        <nav className="flex flex-col gap-4">
          {sidebarData.map((g) => (
            <div key={g.key}>
              <div className="flex items-center gap-1 mb-2">
                <span className="font-medium">{g.title}</span>
              </div>
              <ul className="flex flex-col gap-2 pl-4">
                {g.routes.map((r) => (
                  <li
                    key={r.key}
                    className="flex items-center before:content-[''] before:size-1 before:rounded-full before:bg-gray-500/20 before:mr-2.5"
                  >
                    <Link
                      href={`/docs/${r.href}`}
                      className="block w-full font-light opacity-60 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="col-span-8 mx-auto mt-10 prose prose-neutral dark:prose-invert max-w-none w-full">
        <MDXContent code={doc.content} name="props for mdx" />
      </div>
      <div className="col-span-2">[[PAGE NAVS]]</div>
    </div>
  )
}

