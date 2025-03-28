export enum Status {
  waiting = 'Building',
  done = 'Done',
  updated = 'Updated',
  deprecated = 'Deprecated',
}

export type Routes = Array<{
  title: string
  routes: Array<{
    title: string
    href: string
    status?: keyof typeof Status
  }>
}>

export const routes: Routes = [
  {
    title: 'Getting Started',
    routes: [
      {
        title: 'Introduction',
        href: '/guides/introduction',
      },
      {
        title: 'Installation',
        href: '/guides/installation',
      },
    ],
  },
  {
    title: 'Layouts',
    routes: [
      {
        title: 'Box',
        href: '/layouts/box',
        status: 'waiting',
      },
      {
        title: 'Stack',
        href: '/layouts/stack',
        status: 'waiting',
      },
    ],
  },
  {
    title: 'Components',
    routes: [
      {
        title: 'Avatar',
        href: '/components/avatar',
        status: 'waiting',
      },
      {
        title: 'Button',
        href: '/components/button',
        status: 'waiting',
      },
      {
        title: 'Input',
        href: '/components/input',
        status: 'waiting',
      },
      {
        title: 'Spinner',
        href: '/components/spinner',
        status: 'waiting',
      },
    ],
  },
  {
    title: 'AI',
    routes: [],
  },
]
