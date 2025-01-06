import { Box, Stack } from '@srcube-taro/ui'
import { useLoad } from '@tarojs/taro'
import { Router } from 'tarojs-router-next'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const layouts = [
    {
      title: 'Box',
      to: () => Router.toLayoutBox(),
    },
    {
      title: 'Stack',
      to: () => Router.toLayoutStack(),
    },
  ]

  const components = [
    {
      title: 'Buttons',
      to: () => Router.toButtons(),
    },
    {
      title: 'Spinner',
      to: () => Router.toSpinner(),
    },
  ]

  return (
    <Box className="space-y-4 p-4 bg-gray-100">
      <Box className="text-xs font-bold uppercase">Layouts</Box>
      <Stack direction="vertical">
        {layouts.map((link) => (
          <Box
            className="flex justify-center py-2 rounded-lg bg-white font-medium"
            hoverClass="bg-gray-200"
            onTap={link.to}
            key={link.title}
          >
            {link.title}
          </Box>
        ))}
      </Stack>
      <Box className="text-xs font-bold uppercase">Components</Box>
      <Stack direction="vertical">
        {components.map((link) => (
          <Box
            className="flex justify-center py-2 rounded-lg bg-white font-medium"
            hoverClass="bg-gray-200"
            onTap={link.to}
            key={link.title}
          >
            {link.title}
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
