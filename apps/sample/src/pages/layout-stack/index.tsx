import { Section } from '@/components/section'
import { Box, Stack } from '@srcube-taro/ui'

export default function Buttons() {
  return (
    <Box className="flex flex-col gap-4 py-4">
      <Section title="Horizontal Stack" contentClass="">
        <Stack direction="horizontal" spacing="lg" justify="center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Box key={index} className="size-24 rounded-lg bg-gray-100"></Box>
          ))}
        </Stack>
      </Section>
      <Section title="Vertical Stack" contentClass="">
        <Stack direction="vertical" align="center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Box key={index} className="size-24 rounded-lg bg-gray-100"></Box>
          ))}
        </Stack>
      </Section>
    </Box>
  )
}
