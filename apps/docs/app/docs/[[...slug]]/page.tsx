import { docs } from '#velite'
import { MDXContent } from '@/components/mdx-content'
import { Sidebar } from '@/components/sidebar'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string[] }>
}

function getPageBySlug(slug: string[]) {
  return docs.find(page => JSON.stringify(page.slug) === JSON.stringify(slug))
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params

  const doc = getPageBySlug(slug)

  if (!doc)
    return notFound()

  return (
    <div className="flex-grow grid grid-cols-12 gap-8 px-12 py-6 h-full">
      <div className="col-span-2 relative">
        <Sidebar />
      </div>
      <div className="col-span-8 mx-auto mt-8 prose prose-neutral dark:prose-invert max-w-none w-full">
        <div className="">
          <MDXContent code={doc.content} name="props for mdx" />
        </div>
      </div>
      <div className="col-span-2 relative">
        <div className="fixed">[[PAGE NAVS]]</div>
      </div>
    </div>
  )
}
