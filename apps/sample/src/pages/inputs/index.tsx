import { Page } from '@/components/page'
import { Section } from '@/components/section'
import { Box, Input } from '@srcube-taro/ui'

export default function Buttons() {
  return (
    <Page>
      <Section title="Base" contentClass="flex flex-col gap-2">
        <Input />
      </Section>
      <Section title="Sizes" contentClass="flex flex-col gap-2">
        <Input size="xs" />
        <Input size="sm" />
        <Input size="md" />
        <Input size="lg" />
      </Section>
      <Section title="Layouts" contentClass="flex flex-col gap-2">
        <Input
          startContent={<Box className="i-[tabler--shield-lock-filled]" />}
          endContent={<Box className="i-[flowbite--close-circle-solid] opacity-20" />}
        />
      </Section>
    </Page>
  )
}
