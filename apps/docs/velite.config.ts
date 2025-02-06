import { defineConfig, s } from 'velite'

export default defineConfig({
  collections: {
    docs: {
      name: 'Docs',
      pattern: 'docs/**/*.mdx',
      schema: s
        .object({
          title: s.string(),
          description: s.string(),
          metadata: s.metadata(),
          meta: s.object({
            group: s.string(),
            sort: s.number(),
          }),
          content: s.mdx(),
        })
        .transform((data, { meta }) => {
          const slug = meta.path
            .replace(`${meta.config.root}/docs/`, '')
            .replace('.mdx', '')
            .split('/')

          return {
            ...data,
            slug,
            meta: {
              ...data.meta,
              ...data.metadata,
            },
            metadata: void 0,
          }
        }),
    },
  },
})
