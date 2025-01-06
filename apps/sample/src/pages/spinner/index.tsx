import { Section } from '@/components/section'
import { Box, Spinner } from '@srcube-taro/ui'

export default function SpinnerDemo() {
  return (
    <Box className="flex flex-col gap-4 py-4">
      <Section
        title="Colors"
        contentClass="grid grid-cols-6 gap-4 justify-items-center"
      >
        <Spinner color="default" />
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="danger" />
        <Spinner color="warning" />
        <Spinner color="success" />
      </Section>

      <Section title="Sizes" contentClass="grid grid-cols-5 gap-4 items-center">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </Section>

      <Section title="Label" contentClass="grid grid-cols-3 gap-2">
        <Spinner color="default" label="Loading" />
        <Spinner color="primary" label="Loading" />
        <Spinner color="secondary" label="Loading" />
        <Spinner color="danger" label="Loading" />
        <Spinner color="warning" label="Loading" />
        <Spinner color="success" label="Loading" />
      </Section>
    </Box>
  )
}
