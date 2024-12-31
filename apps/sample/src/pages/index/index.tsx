import { Box, Button, Stack } from '@srcube-taro/ui'
import { useLoad } from '@tarojs/taro'
import { Router } from 'tarojs-router-next'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const links = [
    {
      title: 'Buttons',
      to: () => Router.toButtons(),
    },
  ]

  return (
    <Box className="p-4 bg-gray-100">
      <Stack direction="vertical">
        {links.map((link) => (
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
