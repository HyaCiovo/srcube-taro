import path from 'node:path'
import QRCode from '@/assets/imgs/srcube-ui.png'
import { TableOfContents } from '@/components/table-of-contents'
import { Sidebar } from '@/layouts/sidebar'
import { compileMdx } from '@/lib/mdx'
import { flattenToc } from '@/utils/toc'
import Image from 'next/image'

interface DocsPageProps {
  params: Promise<{ slug: string[] }>
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params

  const { default: Doc } = await import(`@/content/${slug.join('/')}.mdx`)

  const filePath = path.resolve(`content/${slug.join('/')}.mdx`)

  // Compile the MDX file to get rehype data
  const mdx = await compileMdx(filePath)

  const headings = flattenToc(mdx.data.toc?.[0]?.children)

  return (
    <div className="flex-grow grid grid-cols-12 gap-8 px-12 py-6 h-full">
      <div className="col-span-2 relative">
        <Sidebar />
      </div>
      <div className="col-span-8 mx-auto mt-8 prose prose-neutral dark:prose-invert max-w-none w-full">
        <Doc />
      </div>
      <div className="col-span-2 relative">
        <div className="fixed grid grid-rows-12 gap-4">
          <div className="row-span-6">
            <TableOfContents headings={headings} />
          </div>
          <div className="row-span-3">
            <Image src={QRCode} alt="Taro" className="size-32 rounded-lg object-cover" />
          </div>
          <div className="row-span-3">
            <div className="flex items-center justify-center size-32 rounded-xl bg-content2 text-content4">Ad</div>
          </div>
        </div>
      </div>
    </div>
  )
}
