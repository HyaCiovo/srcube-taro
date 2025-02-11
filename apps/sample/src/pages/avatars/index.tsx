import { Page } from '@/components/page'
import { Section } from '@/components/section'
import { Avatar } from '@srcube-taro/ui'
import avatar from './avatar.png'

export default function Buttons() {
  return (
    <Page>
      <Section title="Base" contentClass="flex flex-col gap-2">
        <Avatar src={avatar} />
      </Section>
      <Section title="Sizes" contentClass="flex gap-2">
        <Avatar src={avatar} size="xs" />
        <Avatar src={avatar} size="sm" />
        <Avatar src={avatar} size="md" />
        <Avatar src={avatar} size="lg" />
      </Section>
      <Section title="Radius" contentClass="flex gap-2">
        <Avatar src={avatar} radius="xs" />
        <Avatar src={avatar} radius="sm" />
        <Avatar src={avatar} radius="md" />
        <Avatar src={avatar} radius="lg" />
      </Section>
    </Page>
  )
}
